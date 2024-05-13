import { Injectable } from "@nestjs/common";

import {
  IFreeBoardServiceCreate,
  IFreeBoardServiceUpdate,
} from "./interfaces/FreeBoards-service.interface";
import { FreeBoard } from "./entities/Freeboard.entity";
import { CreateFreeBoardInput } from "./dto/create-board.input";
import { Between, RelationId, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import {
  IFetchFreeBoardsCommentCountsService,
  IFetchFreeBoardsComments,
  IFreeBoardCommentServiceWrite,
  IUpdateFreeBoardComment,
} from "./interfaces/FreeBoardsComment-service.interface";
import { FreeBoardComment } from "./entities/FreeboardComment.entity";

// 인젝션-스코프 --> 1.싱글톤(new 한번)으로 할래? 생략하면 싱글톤
//                  2.Request 스코프(매 요청마다) 할래?
//                  3.Transient 스코프(매 주입마다 new)로 할래 ?

@Injectable()
export class FreeBoardsService {
  constructor(
    @InjectRepository(FreeBoard)
    private readonly FreeBoardRepository: Repository<FreeBoard>,
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
    @InjectRepository(FreeBoardComment)
    private readonly FreeBoardCommentRepository: Repository<FreeBoardComment>
  ) {}
  async FetchFreeBoards({ page }): Promise<FreeBoard[]> {
    if (!page) {
      //모든 데이터 조회
      const result = await this.FreeBoardRepository.find({
        relations: ["user"],
      });
      return result;
    }

    if (page) {
      // 페이지 범위 데이터 조회
      const result = await this.FreeBoardRepository.find({
        //  4번 게시글을 조회하면 31~40번의 글이 나와야하니  페이지에서 1을뺴주고 *10 +1로 31번부터를 잡는다.
        where: { number: Between((page - 1) * 10 + 1, page * 10) },
        relations: ["user"],
      });
      return result;
    }
  }

  async FetchFreeBoardsCounts(): Promise<Number> {
    const result = await this.FreeBoardRepository.count();

    return result;
  }

  async FetchFreeBoard({ number }): Promise<FreeBoard> {
    const result = await this.FreeBoardRepository.findOne({
      where: { number: number },
      relations: ["user"],
    });

    return result;
  }

  async CreateFreeBoard({
    createFreeBoardInput,
  }: IFreeBoardServiceCreate): Promise<FreeBoard> {
    const UserInfo = await this.UserRepository.findOne({
      where: { nickname: createFreeBoardInput.writer },
    });

    const result = await this.FreeBoardRepository.save({
      writer: createFreeBoardInput.writer,
      password: createFreeBoardInput.password,
      title: createFreeBoardInput.title,
      content: createFreeBoardInput.content,
      FileUrls: createFreeBoardInput.FileUrls,
      user: UserInfo,
    });

    console.log(result);
    return result;
  }

  async UpdateFreeBoard({
    updateFreeBoardInput,
    BoardId,
  }: IFreeBoardServiceUpdate): Promise<FreeBoard> {
    const RegecyBoard = await this.FreeBoardRepository.findOne({
      where: { number: BoardId },
      relations: ["user"],
    });

    const result = await this.FreeBoardRepository.save({
      ...RegecyBoard,
      ...updateFreeBoardInput,
    });

    console.log(result);
    return result;
  }

  async CreateFreeBoardComment({
    createFreeBoardCommentInput,
    BoardId,
  }: IFreeBoardCommentServiceWrite): Promise<FreeBoardComment> {
    const UserInfo = await this.UserRepository.findOne({
      where: { nickname: createFreeBoardCommentInput.writer },
    });

    const BoardInfo = await this.FreeBoardRepository.findOne({
      where: { number: BoardId },
      relations: ["user"],
    });

    //댓글 테이블에 저장
    const comment = await this.FreeBoardCommentRepository.save({
      writer: createFreeBoardCommentInput.writer,
      content: createFreeBoardCommentInput.content,
      user: UserInfo,
      FreeBoard: BoardInfo,
    });

    return comment;
  }

  async FetchFreeBoardCommentCount({
    BoardId,
  }: IFetchFreeBoardsCommentCountsService): Promise<Number> {
    if (BoardId) {
      const result = this.FreeBoardCommentRepository.count({
        relations: ["FreeBoard"],
        where: { FreeBoard: { number: BoardId } },
      });
      return result;
    }
    // 모든 게시글의 댓글 개수 조회
    if (!BoardId) {
      const result = this.FreeBoardCommentRepository.count({
        relations: ["FreeBoard"],
      });
      return result;
    }
  }

  async FetchFreeBoardsComments({
    BoardId,
    page,
  }: IFetchFreeBoardsComments): Promise<FreeBoardComment[]> {
    if (!page) {
      const result = await this.FreeBoardCommentRepository.find({
        relations: ["FreeBoard", "user"],
        where: { FreeBoard: { number: BoardId } },

        order: {
          createdAt: "DESC",
        },
      });

      return result;
    }

    if (BoardId && page) {
      const result = await this.FreeBoardCommentRepository.find({
        relations: ["FreeBoard", "user"],
        where: { FreeBoard: { number: BoardId } },
        skip: (page - 1) * 10,
        take: 10,
        order: {
          createdAt: "DESC",
        },
      });

      return result;
    }
  }

  async UpdateFreeBoardComment({
    updateFreeBoardCommentInput,
    BoardCommentId,
  }: IUpdateFreeBoardComment): Promise<FreeBoardComment> {
    const Comment = await this.FreeBoardCommentRepository.findOne({
      where: { number: BoardCommentId },
      relations: ["user", "FreeBoard"],
    });

    const result = await this.FreeBoardCommentRepository.save({
      ...Comment,
      ...updateFreeBoardCommentInput,
    });

    return result;
  }

  async FreeBoardCommentDelete(BoardCommentId: number): Promise<String> {
    const Comment = await this.FreeBoardCommentRepository.delete({
      number: BoardCommentId,
    });

    console.log(Comment);

    return "삭제되었습니다.";
  }

  async Views(BoardId: number): Promise<Number> {
    const BoardInfo = await this.FreeBoardRepository.findOne({
      where: { number: BoardId },
      relations: ["user"],
    });

    const abc = await this.FreeBoardRepository.save({
      ...BoardInfo,
      views: BoardInfo.views + 1,
    });

    return abc.views;
  }

  async ViewsCount(BoardId: number): Promise<Number> {
    const BoardInfo = await this.FreeBoardRepository.findOne({
      where: { number: BoardId },
      relations: ["user"],
    });

    return BoardInfo.views;
  }
  async DeleteFreeBoard(BoardId: number): Promise<Number> {
    const ResultFreeBoardCommentData =
      await this.FreeBoardCommentRepository.delete({
        FreeBoard: { number: BoardId },
      });

    const ResultFreeBoardData = await this.FreeBoardRepository.delete({
      number: BoardId,
    });

    return 1;
  }
}
