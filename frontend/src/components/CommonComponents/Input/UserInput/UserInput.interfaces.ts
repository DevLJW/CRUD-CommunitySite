import { FieldValue, UseFormRegister } from "react-hook-form";
import { IJoinSchema } from "../../../units/User/Join/Join.types";
import { ILoginSchema } from "../../../units/User/Login/Login.interfaces";
import { IFreeBoardWriteSchema } from "../../../units/NoticeBoard/FreeBoard/Write/FreeBoardWrite.interfaces";
import { IFreeBoardUpdateSchema } from "../../../units/NoticeBoard/FreeBoard/Update/FreeBoardUpdate.interfaces";
import { IFreeBoardCommentWriteSchema } from "../../../units/NoticeBoard/FreeBoard/Comment/Write/FreeBoardComment.interfaces";

export interface IUserInputInterface {
  style?: React.CSSProperties;
  state?: string;
  name: string;
}

export interface IUserInputUIInterface {
  JoinRegister?: UseFormRegister<IJoinSchema>;
  LoginRegister?: UseFormRegister<ILoginSchema>;
  FreeBoardRegister?: UseFormRegister<IFreeBoardWriteSchema>;
  FreeBoardUpdateRegister?: UseFormRegister<IFreeBoardUpdateSchema>;
  FreeBoardCommentWriteRegister?: UseFormRegister<IFreeBoardCommentWriteSchema>;
  name: string;
  style?: React.CSSProperties;
  state?: string;
}

export interface IUserInputStyleInterface {
  style?: React.CSSProperties;
}

export type JoinRegister =
  | "email"
  | "password"
  | "nickname"
  | "name"
  | "cellphone"
  | "passwordcheck"
  | "smscheck"
  | "emailboolean"
  | "nicknameboolean"
  | "smscheckboolean";

export type LoginRegister = "email" | "password";

export type FreeBoardWriteRegister =
  | "writer"
  | "FileUrls"
  | "password"
  | "title"
  | "content";

export type FreeBoardUpdateRegister =
  | "writer"
  | "FileUrls"
  | "password"
  | "title"
  | "content";

export type FreeBoardCommentWriteRegister = "writer" | "content";
