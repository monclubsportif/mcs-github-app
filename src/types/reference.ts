import { RepositoryShort } from './repository-short';

export interface Reference {
  ref: string;
  sha: string;
  repo: RepositoryShort;
}
