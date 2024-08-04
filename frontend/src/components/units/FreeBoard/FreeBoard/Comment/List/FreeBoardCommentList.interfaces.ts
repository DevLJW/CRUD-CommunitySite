import { Dispatch, SetStateAction } from "react";
import {
  IFreeBoardComment,
  IQuery,
} from "../../../../../../commons/types/generated/types";

export interface IFreeBoardCommentListUI {
  el: IFreeBoardComment;
  OnClickUpdateButton: (event: any) => Promise<void>;
  OnChangeContent: (event: any) => void;
  OnClickDeleteButton: (event: any) => Promise<void>;
  userData: Pick<IQuery, "fetchUser"> | undefined;
}
