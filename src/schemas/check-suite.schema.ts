import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CheckSuiteShort {
  @Prop({ required: true })
  app_id: number;

  @Prop({ required: true, unique: true })
  sha: string;

  @Prop({ default: false })
  was_done: boolean;
}

export type CheckSuiteShortDocument = CheckSuiteShort & Document;

export const CheckSuiteShortSchema =
  SchemaFactory.createForClass(CheckSuiteShort);
