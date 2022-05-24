import { PullShort } from './pull-short';
import { HeadCommit } from './head-commit';

export interface CheckSuite {
  id: number;
  node_id: string;
  head_branch: string;
  head_sha: string;
  status: 'requested' | 'queued' | 'in_progress' | 'completed';
  conclusion?:
    | 'success'
    | 'failure'
    | 'neutral'
    | 'cancelled'
    | 'timed_out'
    | 'action_required'
    | 'stale';
  url: string;
  before: string;
  after: string;
  pull_requests: Array<PullShort>;
  app: unknown;
  created_at: string;
  updated_at: string;
  latest_check_runs_count: number;
  check_runs_url: string;
  head_commit: HeadCommit;
}
