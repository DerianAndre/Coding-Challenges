import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  // IMPLEMENTAR ATRIBUTOS AQUÍ
}

export const UserSchema = SchemaFactory.createForClass(User);
