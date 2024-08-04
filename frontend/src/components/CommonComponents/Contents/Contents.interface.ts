import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";
import { IFreeBoardCommentWriteSchema } from "../../units/NoticeBoard/FreeBoard/Comment/Write/FreeBoardComment.interfaces";
import { IFreeBoardCommentUpdateSchema } from "../../units/NoticeBoard/FreeBoard/Comment/Update/FreeBoardCommentUpdate.interfaces";

export interface IContents {
  children?: ReactNode;
  style?: React.CSSProperties;
  placeholder?: string;
  name?: string;
  state?: string;
}

export interface IContentsUI {
  children?: ReactNode;
  style?: React.CSSProperties;
  placeholder?: string;
  FreeBoardCommentUpdateRegister?: UseFormRegister<IFreeBoardCommentUpdateSchema>;
  FreeBoardCommentWriteRegister?: UseFormRegister<IFreeBoardCommentWriteSchema>;
  name?: string;
  state: string;
}

export type registerType = "content";
