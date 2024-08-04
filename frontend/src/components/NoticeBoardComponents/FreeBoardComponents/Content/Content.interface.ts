import { UseFormRegister } from "react-hook-form";
import { IFreeBoardWriteSchema } from "../../../units/NoticeBoard/FreeBoard/Write/FreeBoardWrite.interfaces";

export interface IContentUIInterface {
  register: UseFormRegister<IFreeBoardWriteSchema>;
  name: string;
}

export interface IContentInterface {
  name: string;
}

export type ContentRegister =
  | "title"
  | "content"
  | "writer"
  | "password"
  | "FileUrls"
  | `FileUrls.${number}`;
