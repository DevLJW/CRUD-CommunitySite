import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { IContext } from "src/commons/interfaces/context";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "./guards/gql-auth.guard";
import { IAuthServiceLoginReturn } from "../users/interfaces/users-service.interfaces";
import { AccessToken } from "./class/AccessToken";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => AccessToken)
  async login(
    @Args("email") email: string,
    @Args("password") password: string,
    @Context() context: IContext

    /*
    - `@Context()` : Request와 Response, header 등에 대한 정보들이 context에 존재   
       따라서 데코레이터를 통해 해당 context 정보를 가지고 올 수 있도록 설정해 줍니다.
        */
  ): Promise<AccessToken> {
    return await this.authService.login({ email, password, context });
  }

  //  1.  refreshToken인지 확인하기!(먼저인가)
  //  2.  accessToken 재발급하기

  @UseGuards(GqlAuthGuard("refresh"))
  @Mutation(() => String)
  restoreAccessToken(@Context() context: IContext): string {
    // 토큰 재발급
    //컨텍스트는 기본정보는 다들어옴  req안에 user라는 값이 추가되어 반환된다. validate에서 리턴때문에
    return this.authService.restoreAccessToken({
      user: context.req.user,
      context,
    });
  }
  @UseGuards(GqlAuthGuard("access"))
  @Mutation(() => String)
  logout(@Context() context: IContext): String {
    //   @Context : validate에서 리턴한 값과 req,res의 값이 들어 있다.
    return this.authService.logout({ context });
  }
}
