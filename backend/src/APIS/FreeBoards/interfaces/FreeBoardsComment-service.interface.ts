import { CreateFreeBoardCommentInput } from "../dto/create-board-comment.input";
import { UpdateFreeBoardCommentInput } from "../dto/update-board-comment.input";

export interface IFreeBoardCommentServiceWrite {
  createFreeBoardCommentInput: CreateFreeBoardCommentInput;
  BoardId: number;
}

export interface IFetchFreeBoardsCommentCountsService {
  BoardId: number;
}

export interface IFetchFreeBoardsComments {
  page: number;
  BoardId: number;
}

export interface IUpdateFreeBoardComment {
  updateFreeBoardCommentInput: UpdateFreeBoardCommentInput;
  BoardCommentId: number;
}
