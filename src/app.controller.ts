import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckSuiteAppCall } from './types/check-suite-app-call';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postStatus(@Res() res, @Body() body) {
    console.log(body);
    if (body.check_suite) {
      const checkSuiteCall: CheckSuiteAppCall = body;
      this.appService
        .addCommit(checkSuiteCall)
        .then((r) => {
          console.log(r);
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
    return res.status(HttpStatus.CREATED);
  }
}

/*
{
  "action": "requested",
  "check_suite": {
    "id": 6639847704,
    "node_id": "CS_kwDOHWzYJ88AAAABi8QJGA",
    "head_branch": "test",
    "head_sha": "0344fd369efad94b308f40092ffe624a6345b1aa",
    "status": "queued",
    "conclusion": null,
    "url": "https://api.github.com/repos/Vinccool96/lint-test/check-suites/6639847704",
    "before": "5ede1f7eeccbb056f0adc3ea0b13bb52815b14dd",
    "after": "0344fd369efad94b308f40092ffe624a6345b1aa",
    "pull_requests": [
      {
        "url": "https://api.github.com/repos/Vinccool96/lint-test/pulls/1",
        "id": 942771221,
        "number": 1,
        "head": {
          "ref": "test",
          "sha": "5ede1f7eeccbb056f0adc3ea0b13bb52815b14dd",
          "repo": {
            "id": 493672487,
            "url": "https://api.github.com/repos/Vinccool96/lint-test",
            "name": "lint-test"
          }
        },
        "base": {
          "ref": "staging",
          "sha": "a09c9fa179feda9cae23de9480110beeeab3bb64",
          "repo": {
            "id": 493672487,
            "url": "https://api.github.com/repos/Vinccool96/lint-test",
            "name": "lint-test"
          }
        }
      }
    ],
    "app": {
      "id": 202610,
      "slug": "vinccool96-test",
      "node_id": "A_kwDOAVZWTc4AAxdy",
      "owner": {
        "login": "Vinccool96",
        "id": 22435405,
        "node_id": "MDQ6VXNlcjIyNDM1NDA1",
        "avatar_url": "https://avatars.githubusercontent.com/u/22435405?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Vinccool96",
        "html_url": "https://github.com/Vinccool96",
        "followers_url": "https://api.github.com/users/Vinccool96/followers",
        "following_url": "https://api.github.com/users/Vinccool96/following{/other_user}",
        "gists_url": "https://api.github.com/users/Vinccool96/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Vinccool96/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Vinccool96/subscriptions",
        "organizations_url": "https://api.github.com/users/Vinccool96/orgs",
        "repos_url": "https://api.github.com/users/Vinccool96/repos",
        "events_url": "https://api.github.com/users/Vinccool96/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Vinccool96/received_events",
        "type": "User",
        "site_admin": false
      },
      "name": "vinccool96-test",
      "description": "",
      "external_url": "http://127.0.0.1/",
      "html_url": "https://github.com/apps/vinccool96-test",
      "created_at": "2022-05-19T20:16:29Z",
      "updated_at": "2022-05-19T20:16:29Z",
      "permissions": {
        "actions": "write",
        "checks": "write",
        "metadata": "read",
        "pull_requests": "write",
        "statuses": "write"
      },
      "events": []
    },
    "created_at": "2022-05-24T15:33:20Z",
    "updated_at": "2022-05-24T15:33:20Z",
    "rerequestable": true,
    "runs_rerequestable": true,
    "latest_check_runs_count": 0,
    "check_runs_url": "https://api.github.com/repos/Vinccool96/lint-test/check-suites/6639847704/check-runs",
    "head_commit": {
      "id": "0344fd369efad94b308f40092ffe624a6345b1aa",
      "tree_id": "6a445bdeaf2d152c4d4ad14321b4170f5a5c66f1",
      "message": "App test",
      "timestamp": "2022-05-24T15:33:13Z",
      "author": {
        "name": "Vincent Girard",
        "email": "vinccool96@gmail.com"
      },
      "committer": {
        "name": "Vincent Girard",
        "email": "vinccool96@gmail.com"
      }
    }
  },
  "repository": {
    "id": 493672487,
    "node_id": "R_kgDOHWzYJw",
    "name": "lint-test",
    "full_name": "Vinccool96/lint-test",
    "private": false,
    "owner": {
      "login": "Vinccool96",
      "id": 22435405,
      "node_id": "MDQ6VXNlcjIyNDM1NDA1",
      "avatar_url": "https://avatars.githubusercontent.com/u/22435405?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Vinccool96",
      "html_url": "https://github.com/Vinccool96",
      "followers_url": "https://api.github.com/users/Vinccool96/followers",
      "following_url": "https://api.github.com/users/Vinccool96/following{/other_user}",
      "gists_url": "https://api.github.com/users/Vinccool96/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Vinccool96/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Vinccool96/subscriptions",
      "organizations_url": "https://api.github.com/users/Vinccool96/orgs",
      "repos_url": "https://api.github.com/users/Vinccool96/repos",
      "events_url": "https://api.github.com/users/Vinccool96/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Vinccool96/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/Vinccool96/lint-test",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/Vinccool96/lint-test",
    "forks_url": "https://api.github.com/repos/Vinccool96/lint-test/forks",
    "keys_url": "https://api.github.com/repos/Vinccool96/lint-test/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/Vinccool96/lint-test/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/Vinccool96/lint-test/teams",
    "hooks_url": "https://api.github.com/repos/Vinccool96/lint-test/hooks",
    "issue_events_url": "https://api.github.com/repos/Vinccool96/lint-test/issues/events{/number}",
    "events_url": "https://api.github.com/repos/Vinccool96/lint-test/events",
    "assignees_url": "https://api.github.com/repos/Vinccool96/lint-test/assignees{/user}",
    "branches_url": "https://api.github.com/repos/Vinccool96/lint-test/branches{/branch}",
    "tags_url": "https://api.github.com/repos/Vinccool96/lint-test/tags",
    "blobs_url": "https://api.github.com/repos/Vinccool96/lint-test/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/Vinccool96/lint-test/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/Vinccool96/lint-test/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/Vinccool96/lint-test/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/Vinccool96/lint-test/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/Vinccool96/lint-test/languages",
    "stargazers_url": "https://api.github.com/repos/Vinccool96/lint-test/stargazers",
    "contributors_url": "https://api.github.com/repos/Vinccool96/lint-test/contributors",
    "subscribers_url": "https://api.github.com/repos/Vinccool96/lint-test/subscribers",
    "subscription_url": "https://api.github.com/repos/Vinccool96/lint-test/subscription",
    "commits_url": "https://api.github.com/repos/Vinccool96/lint-test/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/Vinccool96/lint-test/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/Vinccool96/lint-test/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/Vinccool96/lint-test/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/Vinccool96/lint-test/contents/{+path}",
    "compare_url": "https://api.github.com/repos/Vinccool96/lint-test/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/Vinccool96/lint-test/merges",
    "archive_url": "https://api.github.com/repos/Vinccool96/lint-test/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/Vinccool96/lint-test/downloads",
    "issues_url": "https://api.github.com/repos/Vinccool96/lint-test/issues{/number}",
    "pulls_url": "https://api.github.com/repos/Vinccool96/lint-test/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/Vinccool96/lint-test/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/Vinccool96/lint-test/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/Vinccool96/lint-test/labels{/name}",
    "releases_url": "https://api.github.com/repos/Vinccool96/lint-test/releases{/id}",
    "deployments_url": "https://api.github.com/repos/Vinccool96/lint-test/deployments",
    "created_at": "2022-05-18T13:21:38Z",
    "updated_at": "2022-05-18T13:30:45Z",
    "pushed_at": "2022-05-24T15:33:19Z",
    "git_url": "git://github.com/Vinccool96/lint-test.git",
    "ssh_url": "git@github.com:Vinccool96/lint-test.git",
    "clone_url": "https://github.com/Vinccool96/lint-test.git",
    "svn_url": "https://github.com/Vinccool96/lint-test",
    "homepage": null,
    "size": 31,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Ruby",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 1,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 1,
    "watchers": 0,
    "default_branch": "master"
  },
  "sender": {
    "login": "Vinccool96",
    "id": 22435405,
    "node_id": "MDQ6VXNlcjIyNDM1NDA1",
    "avatar_url": "https://avatars.githubusercontent.com/u/22435405?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vinccool96",
    "html_url": "https://github.com/Vinccool96",
    "followers_url": "https://api.github.com/users/Vinccool96/followers",
    "following_url": "https://api.github.com/users/Vinccool96/following{/other_user}",
    "gists_url": "https://api.github.com/users/Vinccool96/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Vinccool96/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Vinccool96/subscriptions",
    "organizations_url": "https://api.github.com/users/Vinccool96/orgs",
    "repos_url": "https://api.github.com/users/Vinccool96/repos",
    "events_url": "https://api.github.com/users/Vinccool96/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Vinccool96/received_events",
    "type": "User",
    "site_admin": false
  },
  "installation": {
    "id": 25851408,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjU4NTE0MDg="
  }
}
 */

/*
{
  "action": "requested",
  "check_suite": {
    "id": 6639853341,
    "node_id": "CS_kwDOHWzYJ88AAAABi8QfHQ",
    "head_branch": "test",
    "head_sha": "31c91d10da0c0136d797d608018e9b1a0217f37a",
    "status": "queued",
    "conclusion": null,
    "url": "https://api.github.com/repos/Vinccool96/lint-test/check-suites/6639853341",
    "before": "0344fd369efad94b308f40092ffe624a6345b1aa",
    "after": "31c91d10da0c0136d797d608018e9b1a0217f37a",
    "pull_requests": [
      {
        "url": "https://api.github.com/repos/Vinccool96/lint-test/pulls/1",
        "id": 942771221,
        "number": 1,
        "head": {
          "ref": "test",
          "sha": "31c91d10da0c0136d797d608018e9b1a0217f37a",
          "repo": {
            "id": 493672487,
            "url": "https://api.github.com/repos/Vinccool96/lint-test",
            "name": "lint-test"
          }
        },
        "base": {
          "ref": "staging",
          "sha": "a09c9fa179feda9cae23de9480110beeeab3bb64",
          "repo": {
            "id": 493672487,
            "url": "https://api.github.com/repos/Vinccool96/lint-test",
            "name": "lint-test"
          }
        }
      }
    ],
    "app": {
      "id": 202610,
      "slug": "vinccool96-test",
      "node_id": "A_kwDOAVZWTc4AAxdy",
      "owner": {
        "login": "Vinccool96",
        "id": 22435405,
        "node_id": "MDQ6VXNlcjIyNDM1NDA1",
        "avatar_url": "https://avatars.githubusercontent.com/u/22435405?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Vinccool96",
        "html_url": "https://github.com/Vinccool96",
        "followers_url": "https://api.github.com/users/Vinccool96/followers",
        "following_url": "https://api.github.com/users/Vinccool96/following{/other_user}",
        "gists_url": "https://api.github.com/users/Vinccool96/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Vinccool96/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Vinccool96/subscriptions",
        "organizations_url": "https://api.github.com/users/Vinccool96/orgs",
        "repos_url": "https://api.github.com/users/Vinccool96/repos",
        "events_url": "https://api.github.com/users/Vinccool96/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Vinccool96/received_events",
        "type": "User",
        "site_admin": false
      },
      "name": "vinccool96-test",
      "description": "",
      "external_url": "http://127.0.0.1/",
      "html_url": "https://github.com/apps/vinccool96-test",
      "created_at": "2022-05-19T20:16:29Z",
      "updated_at": "2022-05-19T20:16:29Z",
      "permissions": {
        "actions": "write",
        "checks": "write",
        "metadata": "read",
        "pull_requests": "write",
        "statuses": "write"
      },
      "events": []
    },
    "created_at": "2022-05-24T15:33:41Z",
    "updated_at": "2022-05-24T15:33:41Z",
    "rerequestable": true,
    "runs_rerequestable": true,
    "latest_check_runs_count": 0,
    "check_runs_url": "https://api.github.com/repos/Vinccool96/lint-test/check-suites/6639853341/check-runs",
    "head_commit": {
      "id": "31c91d10da0c0136d797d608018e9b1a0217f37a",
      "tree_id": "c3103aec70c594948aa5825645d1f427dde8d9b4",
      "message": "rubocop-linter commit",
      "timestamp": "2022-05-24T15:33:40Z",
      "author": {
        "name": "Vinccool96",
        "email": "Vinccool96@users.noreply.github.com"
      },
      "committer": {
        "name": "Vinccool96",
        "email": "Vinccool96@users.noreply.github.com"
      }
    }
  },
  "repository": {
    "id": 493672487,
    "node_id": "R_kgDOHWzYJw",
    "name": "lint-test",
    "full_name": "Vinccool96/lint-test",
    "private": false,
    "owner": {
      "login": "Vinccool96",
      "id": 22435405,
      "node_id": "MDQ6VXNlcjIyNDM1NDA1",
      "avatar_url": "https://avatars.githubusercontent.com/u/22435405?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Vinccool96",
      "html_url": "https://github.com/Vinccool96",
      "followers_url": "https://api.github.com/users/Vinccool96/followers",
      "following_url": "https://api.github.com/users/Vinccool96/following{/other_user}",
      "gists_url": "https://api.github.com/users/Vinccool96/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Vinccool96/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Vinccool96/subscriptions",
      "organizations_url": "https://api.github.com/users/Vinccool96/orgs",
      "repos_url": "https://api.github.com/users/Vinccool96/repos",
      "events_url": "https://api.github.com/users/Vinccool96/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Vinccool96/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/Vinccool96/lint-test",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/Vinccool96/lint-test",
    "forks_url": "https://api.github.com/repos/Vinccool96/lint-test/forks",
    "keys_url": "https://api.github.com/repos/Vinccool96/lint-test/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/Vinccool96/lint-test/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/Vinccool96/lint-test/teams",
    "hooks_url": "https://api.github.com/repos/Vinccool96/lint-test/hooks",
    "issue_events_url": "https://api.github.com/repos/Vinccool96/lint-test/issues/events{/number}",
    "events_url": "https://api.github.com/repos/Vinccool96/lint-test/events",
    "assignees_url": "https://api.github.com/repos/Vinccool96/lint-test/assignees{/user}",
    "branches_url": "https://api.github.com/repos/Vinccool96/lint-test/branches{/branch}",
    "tags_url": "https://api.github.com/repos/Vinccool96/lint-test/tags",
    "blobs_url": "https://api.github.com/repos/Vinccool96/lint-test/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/Vinccool96/lint-test/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/Vinccool96/lint-test/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/Vinccool96/lint-test/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/Vinccool96/lint-test/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/Vinccool96/lint-test/languages",
    "stargazers_url": "https://api.github.com/repos/Vinccool96/lint-test/stargazers",
    "contributors_url": "https://api.github.com/repos/Vinccool96/lint-test/contributors",
    "subscribers_url": "https://api.github.com/repos/Vinccool96/lint-test/subscribers",
    "subscription_url": "https://api.github.com/repos/Vinccool96/lint-test/subscription",
    "commits_url": "https://api.github.com/repos/Vinccool96/lint-test/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/Vinccool96/lint-test/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/Vinccool96/lint-test/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/Vinccool96/lint-test/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/Vinccool96/lint-test/contents/{+path}",
    "compare_url": "https://api.github.com/repos/Vinccool96/lint-test/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/Vinccool96/lint-test/merges",
    "archive_url": "https://api.github.com/repos/Vinccool96/lint-test/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/Vinccool96/lint-test/downloads",
    "issues_url": "https://api.github.com/repos/Vinccool96/lint-test/issues{/number}",
    "pulls_url": "https://api.github.com/repos/Vinccool96/lint-test/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/Vinccool96/lint-test/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/Vinccool96/lint-test/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/Vinccool96/lint-test/labels{/name}",
    "releases_url": "https://api.github.com/repos/Vinccool96/lint-test/releases{/id}",
    "deployments_url": "https://api.github.com/repos/Vinccool96/lint-test/deployments",
    "created_at": "2022-05-18T13:21:38Z",
    "updated_at": "2022-05-18T13:30:45Z",
    "pushed_at": "2022-05-24T15:33:40Z",
    "git_url": "git://github.com/Vinccool96/lint-test.git",
    "ssh_url": "git@github.com:Vinccool96/lint-test.git",
    "clone_url": "https://github.com/Vinccool96/lint-test.git",
    "svn_url": "https://github.com/Vinccool96/lint-test",
    "homepage": null,
    "size": 31,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Ruby",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 1,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 1,
    "watchers": 0,
    "default_branch": "master"
  },
  "sender": {
    "login": "github-actions[bot]",
    "id": 41898282,
    "node_id": "MDM6Qm90NDE4OTgyODI=",
    "avatar_url": "https://avatars.githubusercontent.com/in/15368?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/github-actions%5Bbot%5D",
    "html_url": "https://github.com/apps/github-actions",
    "followers_url": "https://api.github.com/users/github-actions%5Bbot%5D/followers",
    "following_url": "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
    "gists_url": "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
    "organizations_url": "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
    "repos_url": "https://api.github.com/users/github-actions%5Bbot%5D/repos",
    "events_url": "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
    "received_events_url": "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
    "type": "Bot",
    "site_admin": false
  },
  "installation": {
    "id": 25851408,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjU4NTE0MDg="
  }
}
 */
