import { Repository } from './repository';
import { CheckSuite } from './check-suite';
import { Sender } from './sender';

export interface CheckSuiteHook {
  action: string;
  check_suite: CheckSuite;
  repository: Repository;
  sender: Sender;
}
