import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType() //  리턴타입
export class Message {
  @Field(() => String)
  message: string;
}
