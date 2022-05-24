import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CheckSuiteShort,
  CheckSuiteShortDocument,
} from './schemas/check-suite.schema';
import { Model } from 'mongoose';
import { CheckSuiteAppCall } from './types/check-suite-app-call';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(CheckSuiteShort.name)
    private checkSuiteShortModel: Model<CheckSuiteShortDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async addCommit(checkSuiteCall: CheckSuiteAppCall): Promise<CheckSuiteShort> {
    const created = new this.checkSuiteShortModel({
      app_id: checkSuiteCall.installation.id,
      sha: checkSuiteCall.check_suite.head_sha,
    });
    return created.save();
  }
}
