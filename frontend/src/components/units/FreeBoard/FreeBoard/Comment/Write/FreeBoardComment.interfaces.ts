import { UseFormReturn } from "react-hook-form";
import { IQuery } from "../../../../../../commons/types/generated/types";

export interface IFreeBoardCommentWriteSchema {
  writer: string;
  content: string;
}

export interface IFreeBoardCommentUI {
  FreeBoardCommentWriteMethod: UseFormReturn<any, any, undefined>;
  data: Pick<IQuery, "fetchUser"> | undefined;
  state: string;
  onSubmit: (data: IFreeBoardCommentWriteSchema) => Promise<void>;
  onError: (error: any) => void;
}
