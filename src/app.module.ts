import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HookModule } from './hook/hook.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), HookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
