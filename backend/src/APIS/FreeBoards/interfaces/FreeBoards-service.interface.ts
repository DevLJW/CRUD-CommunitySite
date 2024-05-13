import { CreateFreeBoardInput } from "../dto/create-board.input";
import { UpdateFreeBoardInput } from "../dto/update-board.input";

export interface IFreeBoardServiceCreate {
  createFreeBoardInput: CreateFreeBoardInput;
}

export interface IFreeBoardServiceUpdate {
  updateFreeBoardInput: UpdateFreeBoardInput;
  BoardId: number;
}
