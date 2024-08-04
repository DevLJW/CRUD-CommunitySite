import { UseFormReturn } from "react-hook-form";

export interface IFreeBoardUpdateSchema {
  writer: string;
  password: string;
  title: string;
  content: string;
  FileUrls: string[];
}

export interface IFreeBoardUpdateUI {
  state: string;
  FreeBoardUpdateMethod: UseFormReturn<any, any, undefined>;
  onSubmit: (data: IFreeBoardUpdateSchema) => Promise<void>;
  onError: (error: any) => void;
  onChangeFileUrls: (FileUrl: string, index: number) => void;
  FileUrlData: any;
}
