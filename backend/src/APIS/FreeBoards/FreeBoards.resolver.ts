import { Query, Resolver, Mutation, Args, Int } from "@nestjs/graphql";
import { FreeBoardsService } from "./FreeBoards.service";

import { Inject } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache, caching } from "cache-manager";
import { CreateFreeBoardInput } from "./dto/create-board.input";
import { FreeBoard } from "./entities/Freeboard.entity";
import { Int32 } from "typeorm";
import { UpdateFreeBoardInput } from "./dto/update-board.input";
import { CreateFreeBoardCommentInput } from "./dto/create-board-comment.input";
import { FreeBoardComment } from "./entities/FreeboardComment.entity";
import { UpdateFreeBoardCommentInput } from "./dto/update-board-comment.input";

// @Controller()
@Resolver() //   (Graphql 라이브러리)
export class FreeBoardsResolver {
  constructor(
    //이곳에서 생성자를 생성하고 반환한다.
    private readonly FreeBoardsService: FreeBoardsService
  ) {}

  // @Get('/products/buy')
  @Query(() => [FreeBoard]) //  grqphql return type //그래프QL 문서 타입 (Graphql 라이브러리)
  async FetchFreeBoards(
    @Args("page", { nullable: true, type: () => Int })
    page: number
  ): Promise<FreeBoard[]> {
    //  function return type
    return this.FreeBoardsService.FetchFreeBoards({ page });
  }

  @Query(() => FreeBoard) //  grqphql return type //그래프QL 문서 타입 (Graphql 라이브러리)
  async FetchFreeBoard(
    @Args("number", { type: () => Int }) number: number
  ): Promise<FreeBoard> {
    return this.FreeBoardsService.FetchFreeBoard({ number });
  }

  //  게시글의 총 개수
  @Query(() => Int)
  async FetchFreeBoardsCounts(): Promise<Number> {
    return this.FreeBoardsService.FetchFreeBoardsCounts();
  }

  @Mutation(() => FreeBoard) //그래프QL 문서 타입 + Mutation의 기능도함(Graphql 라이브러리)
  async CreateFreeBoard(
    // @Args('writer') //writer로 입력 받는다.
    // writer: string,
    // @Args('title') //writer로 입력 받는다.
    // title: string,
    // @Args({ name: 'contents', nullable: true }) //널값도 허용할떄
    // contents: string,
    @Args("createFreeBoardInput") createFreeBoardInput: CreateFreeBoardInput
  ): Promise<FreeBoard> {
    return await this.FreeBoardsService.CreateFreeBoard({
      createFreeBoardInput,
    });
  }

  @Mutation(() => FreeBoard) //그래프QL 문서 타입 + Mutation의 기능도함(Graphql 라이브러리)
  async UpdateFreeBoard(
    // @Args('writer') //writer로 입력 받는다.
    // writer: string,
    // @Args('title') //writer로 입력 받는다.
    // title: string,
    // @Args({ name: 'contents', nullable: true }) //널값도 허용할떄
    // contents: string,
    @Args("updateFreeBoardInput") updateFreeBoardInput: UpdateFreeBoardInput,
    @Args("BoardId", { type: () => Int }) BoardId: number
  ): Promise<FreeBoard> {
    return await this.FreeBoardsService.UpdateFreeBoard({
      updateFreeBoardInput,
      BoardId,
    });
  }

  @Mutation(() => FreeBoardComment) //그래프QL 문서 타입 + Mutation의 기능도함(Graphql 라이브러리)
  async CreateFreeBoardComment(
    // @Args('writer') //writer로 입력 받는다.
    // writer: string,
    // @Args('title') //writer로 입력 받는다.
    // title: string,
    // @Args({ name: 'contents', nullable: true }) //널값도 허용할떄
    // contents: string,
    @Args("createFreeBoardComment")
    createFreeBoardCommentInput: CreateFreeBoardCommentInput,
    @Args("BoardId", { type: () => Int }) BoardId: number
  ): Promise<FreeBoardComment> {
    return await this.FreeBoardsService.CreateFreeBoardComment({
      createFreeBoardCommentInput,
      BoardId,
    });
  }

  @Query(() => Int) //
  async FetchFreeBoardCommentCount(
    @Args("BoardId", { nullable: true, type: () => Int }) BoardId: number
  ): Promise<Number> {
    return this.FreeBoardsService.FetchFreeBoardCommentCount({ BoardId });
  }

  @Query(() => [FreeBoardComment]) //  grqphql return type //그래프QL 문서 타입 (Graphql 라이브러리)
  async FetchFreeBoardsComments(
    @Args("BoardId", { nullable: true, type: () => Int }) BoardId: number,
    @Args("page", { nullable: true, type: () => Int })
    page: number
  ): Promise<FreeBoardComment[]> {
    //  function return type
    return await this.FreeBoardsService.FetchFreeBoardsComments({
      BoardId,
      page,
    });
  }

  @Mutation(() => FreeBoardComment) //그래프QL 문서 타입 + Mutation의 기능도함(Graphql 라이브러리)
  async UpdateFreeBoardComment(
    @Args("updateFreeBoardCommentInput")
    updateFreeBoardCommentInput: UpdateFreeBoardCommentInput,
    @Args("BoardCommentId", { type: () => Int }) BoardCommentId: number
  ): Promise<FreeBoardComment> {
    return await this.FreeBoardsService.UpdateFreeBoardComment({
      updateFreeBoardCommentInput,
      BoardCommentId,
    });
  }

  @Mutation(() => String) //그래프QL 문서 타입 + Mutation의 기능도함(Graphql 라이브러리)
  async FreeBoardCommentDelete(
    @Args("BoardCommentId", { type: () => Int }) BoardCommentId: number
  ): Promise<String> {
    return await this.FreeBoardsService.FreeBoardCommentDelete(BoardCommentId);
  }

  @Mutation(() => Int) //그래프QL 문서 타입 + Mutation의 기능도함(Graphql 라이브러리)
  async Views(
    @Args("BoardId", { type: () => Int }) BoardId: number
  ): Promise<Number> {
    return await this.FreeBoardsService.Views(BoardId);
  }

  @Query(() => Int) //그래프QL 문서 타입 + Mutation의 기능도함(Graphql 라이브러리)
  async ViewsCount(
    @Args("BoardId", { type: () => Int }) BoardId: number
  ): Promise<Number> {
    return await this.FreeBoardsService.Views(BoardId);
  }

  @Mutation(() => Int) //그래프QL 문서 타입 + Mutation의 기능도함(Graphql 라이브러리)
  async DeleteFreeBoard(
    @Args("BoardId", { type: () => Int }) BoardId: number
  ): Promise<Number> {
    return await this.FreeBoardsService.DeleteFreeBoard(BoardId);
  }
}
