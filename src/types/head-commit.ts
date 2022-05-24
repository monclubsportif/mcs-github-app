import { GitAuthor } from './git-author';

export interface HeadCommit {
  id: string;
  tree_id: string;
  message: string;
  timestamp: string;
  author: GitAuthor;
  committer: GitAuthor;
}
