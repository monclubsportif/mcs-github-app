import { Installation } from './installation';
import { AppRepository } from './app-repository';
import { AppCheckSuite } from './app-check-suite';
import { Sender } from './sender';

export interface CheckSuiteAppCall {
  action: string;
  check_suite: AppCheckSuite;
  repository: AppRepository;
  sender: Sender;
  installation: Installation;
}
