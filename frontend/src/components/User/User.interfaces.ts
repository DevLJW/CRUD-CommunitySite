import { Interpolation } from "@emotion/react";
import { Theme } from "@mui/material";
import {
  ComponentProps,
  Dispatch,
  ReactChildren,
  ReactNode,
  SetStateAction,
} from "react";
import { FieldErrors, UseFormReturn } from "react-hook-form";
import { IJoinSchema } from "../units/User/Join/Join.types";
import { ILoginSchema } from "../units/User/Login/Login.interfaces";
import { IFreeBoardCommentWriteSchema } from "../units/NoticeBoard/FreeBoard/Comment/Write/FreeBoardComment.interfaces";

export interface IDuplucationCheckButton {
  classname?: string;
  EmailValidateCheckButtonOnclick?: () => void;
  NickNameValidateCheckButtonOnclick?: () => void;
  FormContext?: UseFormReturn<IJoinSchema, any, undefined>;
}

export interface IHookFormErrorMessage {
  name: string;
  state: string;
  style?: React.CSSProperties;
  JoinError?: FieldErrors<IJoinSchema>;
  LoginError?: FieldErrors<ILoginSchema>;
  WriterError?: FieldErrors<IFreeBoardCommentWriteSchema>;
}
