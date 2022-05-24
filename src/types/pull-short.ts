import { Reference } from './reference';

export interface PullShort {
  url: string;
  id: number;
  number: number;
  head: Reference;
  base: Reference;
}
