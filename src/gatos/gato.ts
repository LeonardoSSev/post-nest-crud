import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Gato extends Document {

  @Prop()
  nome: string;

  @Prop()
  idade: number;

  @Prop()
  raca: string;
}

export const GatoSchema = SchemaFactory.createForClass(Gato);
