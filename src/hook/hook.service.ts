import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { createAppAuth } from '@octokit/auth-app';
import { InjectModel } from '@nestjs/mongoose';
import {
  CheckSuiteShort,
  CheckSuiteShortDocument,
} from '../schemas/check-suite.schema';
import { Model } from 'mongoose';
import { CheckSuiteHook } from '../types/check-suite-hook';

@Injectable()
export class HookService {
  constructor(
    @InjectModel(CheckSuiteShort.name)
    private checkSuiteShortModel: Model<CheckSuiteShortDocument>,
  ) {}

  private readonly octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: process.env.APP_ID,
      privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      installationId: process.env.INSTALLATION_ID,
    },
  });

  async shouldRun(head_sha: string): Promise<boolean> {
    const check = await this.checkSuiteShortModel
      .findOne({ sha: head_sha })
      .exec();
    return check ? !check.was_done : false;
  }

  async setRan(head_sha: string) {
    await this.checkSuiteShortModel
      .findOneAndUpdate({ sha: head_sha }, { was_done: true })
      .exec();
  }

  async work(checkSuiteHook: CheckSuiteHook) {
    const commits = await this.octokit.rest.pulls
      .listCommits({
        owner: checkSuiteHook.repository.owner.login,
        repo: checkSuiteHook.repository.name,
        pull_number: checkSuiteHook.check_suite.pull_requests[0].number,
      })
      .then((value) => {
        return value.data;
      })
      .catch((reason) => {
        console.log(reason);
        return null;
      });
    const lastCommit = commits[commits.length - 1];
    if (await this.shouldRun(lastCommit.sha)) {
      const runs = await this.octokit.rest.checks
        .listForSuite({
          owner: checkSuiteHook.repository.owner.login,
          repo: checkSuiteHook.repository.name,
          check_suite_id: checkSuiteHook.check_suite.id,
        })
        .then((value) => {
          return value.data.check_runs;
        })
        .catch((reason) => {
          console.log(reason);
          return null;
        });
      for (const run of runs) {
        this.octokit.rest.checks
          .create({
            owner: checkSuiteHook.repository.owner.login,
            repo: checkSuiteHook.repository.name,
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
      await this.setRan(lastCommit.sha);
    }
  }
}
