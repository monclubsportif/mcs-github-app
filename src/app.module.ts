import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HookModule } from './hook/hook.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CheckSuiteShort,
  CheckSuiteShortSchema,
} from './schemas/check-suite.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB),
    MongooseModule.forFeature([
      { name: CheckSuiteShort.name, schema: CheckSuiteShortSchema },
    ]),
    HookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
