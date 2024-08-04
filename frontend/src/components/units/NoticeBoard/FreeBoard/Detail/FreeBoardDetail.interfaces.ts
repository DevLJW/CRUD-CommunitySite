import { IQuery } from "../../../../../commons/types/generated/types";

export interface IFreeBoardDetailUI {
  data: Pick<IQuery, "FetchFreeBoard"> | undefined;
  userData: Pick<IQuery, "fetchUser"> | undefined;
}
