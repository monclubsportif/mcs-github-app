import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CheckSuiteHook } from '../types/check-suite-hook';
import { HookService } from './hook.service';

@Controller('hooks')
export class HookController {
  constructor(private readonly hookService: HookService) {}

  @Post()
  hookTrigger(@Res() res, @Body() body) {
    console.log(body);
    if (body.check_suite) {
      const checkSuiteHook = body as CheckSuiteHook;
      const checkSuite = checkSuiteHook.check_suite;
      const repository = checkSuiteHook.repository;
      if (checkSuite.status === 'completed') {
        this.hookService
          .work(checkSuite, repository)
          .then(() => {})
          .catch(() => {});
      }
    }
    return res.status(HttpStatus.OK);
  }
}
