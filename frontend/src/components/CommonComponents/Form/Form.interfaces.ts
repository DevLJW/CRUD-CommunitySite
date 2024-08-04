import { ReactNode } from "react";

export interface IForm {
  children?: ReactNode;
  onSubmit?: (data: any) => Promise<void> | ((error: any) => Promise<void>);
  style?: React.CSSProperties;
}
