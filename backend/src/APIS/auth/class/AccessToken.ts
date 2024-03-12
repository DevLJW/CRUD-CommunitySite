import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType() //  리턴타입
export class AccessToken {
  @Field(() => String)
  accesstoken: string;
}
