import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckSuiteAppCall } from './types/check-suite-app-call';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postStatus(@Res() res, @Body() body) {
    console.log(body);
    if (body.check_suite) {
      const checkSuiteCall: CheckSuiteAppCall = body;
      if (checkSuiteCall.sender.type === 'Bot') {
        this.appService
          .addCommit(checkSuiteCall)
          .then((r) => {
            console.log(r);
          })
          .catch((reason) => {
            console.log(reason);
          });
      }
    }
    return res.status(HttpStatus.CREATED);
  }
}
