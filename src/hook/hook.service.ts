import { Injectable } from '@nestjs/common';
import { CheckSuite } from '../types/check-suite';
import { Repository } from '../types/repository';
import { Octokit } from 'octokit';
import { createAppAuth } from '@octokit/auth-app';

@Injectable()
export class HookService {
  private readonly octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: process.env.APP_ID,
      privateKey: process.env.PRIVATE_KEY.replace(/\\\\n/g, '\n'),
      installationId: process.env.INSTALLATION_ID,
    },
  });

  async work(checkSuite: CheckSuite, repository: Repository) {
    const runs = await this.octokit.rest.checks
      .listForSuite({
        owner: repository.owner.login,
        repo: repository.name,
        check_suite_id: checkSuite.id,
      })
      .then((value) => {
        return value.data.check_runs;
      })
      .catch((reason) => {
        console.log(reason);
        return null;
      });
    const commits = await this.octokit.rest.pulls
      .listCommits({
        owner: repository.owner.login,
        repo: repository.name,
        pull_number: checkSuite.pull_requests[0].number,
      })
      .then((value) => {
        return value.data;
      })
      .catch((reason) => {
        console.log(reason);
        return null;
      });
    const lastCommit = commits[commits.length - 1];
    if (/(rubocop|web)-linter commit/g.test(lastCommit.commit.message)) {
      for (const run of runs) {
        this.octokit.rest.checks
          .create({
            owner: repository.owner.login,
            repo: repository.name,
            name: run.name,
            head_sha: lastCommit.sha,
            conclusion: run.conclusion,
            started_at: run.started_at,
            completed_at: run.completed_at,
            details_url: run.details_url,
          })
          .then((value) => {
            return value.data;
          })
          .catch((reason) => {
            console.log(reason);
            return null;
          });
      }
    }
  }
}
