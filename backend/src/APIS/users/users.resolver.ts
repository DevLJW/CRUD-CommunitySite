import { Args, Context, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { UseGuards } from "@nestjs/common";

import { IContext } from "src/commons/interfaces/context";
import { GqlAuthGuard } from "../auth/guards/gql-auth.guard";
import { Message } from "./class/Message";
import { SendMessage } from "./class/SendMessage";

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    //grahql type으로 받은 email을 email 변수에 넣어준다.
    @Args("email") email: string,
    @Args("name") name: string,
    @Args("nickname") nickname: string,
    @Args("password") password: string,
    @Args("cellphone") cellphone: string
    // @Args({ name: "cellphone", type: () => Int }) cellphone: number
  ): Promise<User> {
    return this.usersService.create({
      email,
      password,
      name,
      nickname,
      cellphone,
    });
  }

  //  API 요청이 들어오면 UseGuards(인가)가 먼저 실행된다. 그후 성공하면 아래로직 실패면 에러가 뜬다.
  @UseGuards(GqlAuthGuard("access")) //인가하기전 검증하는 라이브러리
  @Query(() => User)
  async fetchUser(@Context() context: IContext): Promise<User> {
    //내 정보 가져오기

    const id = context.req.user.id;
    //User 타입으로 데이터 반환 해주기 서비스만들어서 디비접근필요

    return this.usersService.fetchUser({ id });
  }

  @Query(() => Message)
  EmailValidateCheck(@Args("email") email: string): Promise<Message> {
    return this.usersService.EmailValidateCheck({ email });
  }

  @Query(() => Message)
  NickNameValidateCheck(@Args("nickname") nickname: string): Promise<Message> {
    return this.usersService.NickNameValidateCheck({ nickname });
  }

  @Query(() => SendMessage)
  SMSSendMessage(
    @Args("phonenumber") phonenumber: string
  ): Promise<SendMessage> {
    return this.usersService.SMSSendMessage({ phonenumber });
  }
}
