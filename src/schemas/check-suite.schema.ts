import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CheckSuiteShort {
  @Prop({ required: true })
  app_id: number;

  @Prop({ required: true, unique: true })
  sha: string;
}

export type CheckSuiteShortDocument = CheckSuiteShort & Document;

export const CheckSuiteShortSchema =
  SchemaFactory.createForClass(CheckSuiteShort);
