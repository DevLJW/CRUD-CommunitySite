import { UseFormReturn } from "react-hook-form";
import * as yup from "yup";
export interface IFreeBoardWriteSchema {
  writer: string;
  password: string;
  title: string;
  content: string;
  FileUrls: string[];
}

export interface IFreeBoardWriteUI {
  state: string;
  BoardWriteSchema: yup.ObjectSchema<{}, IFreeBoardWriteSchema, {}, "">;
  FreeBoardWriteMethod: UseFormReturn<{}, any, undefined>;
  FileUrlData: string[];
  onChangeFileUrls: (FileUrl: string, index: number) => void;
  onSubmit: (data: any) => Promise<void>;
  onError: (error: any) => void;
}
