import { Field, ObjectType, PartialType } from "@nestjs/graphql";
import { MessageType, SingleMessageSentResponse } from "coolsms-node-sdk";

@ObjectType() //  리턴타입
export class SendMessage {
  @Field(() => String)
  groupId?: string;
  @Field(() => String)
  to?: string;
  @Field(() => String)
  from?: string;
  @Field(() => String)
  statusMessage?: string;
  @Field(() => String)
  country?: string;
  @Field(() => String)
  messageId?: string;
  @Field(() => String)
  statusCode: string;
  @Field(() => String)
  accountId?: string;
  @Field(() => String)
  type?: MessageType;
}
