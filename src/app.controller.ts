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
    }
    return res.status(HttpStatus.CREATED);
  }
}
