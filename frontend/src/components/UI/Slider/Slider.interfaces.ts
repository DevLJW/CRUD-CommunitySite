import { IQuery } from "../../../commons/types/generated/types";

export interface ISliderUI {
  slidersettings?: any;
  id: string;
  AllBoardData: Pick<IQuery, "FetchFreeBoards"> | undefined;
}
