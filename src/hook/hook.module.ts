import { Module } from '@nestjs/common';
import { HookController } from './hook.controller';
import { HookService } from './hook.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CheckSuiteShort,
  CheckSuiteShortSchema,
} from '../schemas/check-suite.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CheckSuiteShort.name, schema: CheckSuiteShortSchema },
    ]),
  ],
  controllers: [HookController],
  providers: [HookService],
})
export class HookModule {}
