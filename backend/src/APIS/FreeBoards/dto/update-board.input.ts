import { Field, InputType } from "@nestjs/graphql";

@InputType() //  데이터가 들어오는 타입은 Inputtype으로 Graphql 명세에 표기해야 한다.
export class UpdateFreeBoardInput {
  @Field(() => String)
  writer: string;
  @Field(() => String)
  password: string;
  @Field(() => String)
  title: string;
  @Field(() => String)
  content: string;
  @Field(() => [String], { nullable: true })
  FileUrls?: string[];
}
