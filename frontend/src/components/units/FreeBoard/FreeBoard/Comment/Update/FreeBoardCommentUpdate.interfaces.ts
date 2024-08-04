import { UseFormReturn } from "react-hook-form";
import { IFreeBoardComment } from "../../../../../../commons/types/generated/types";

export interface IFreeBoardCommentUpdateSchema {
  content: string;
}

export interface IFreeBoardCommentUpdateUI {
  FreeBoardCommentUpdateMethod: UseFormReturn<any, any, undefined>;
  onSubmit: (data: IFreeBoardCommentUpdateSchema) => Promise<void>;
  onError: (error: any) => void;
}

export interface IFreeBoardCommentUpdate {
  el: IFreeBoardComment;
}
