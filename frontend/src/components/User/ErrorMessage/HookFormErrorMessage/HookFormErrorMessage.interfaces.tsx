import { FieldErrors } from "react-hook-form";
import { IJoinSchema } from "../../../units/User/Join/Join.types";
import { ILoginSchema } from "../../../units/User/Login/Login.interfaces";

export interface IHookFormErrorMessage {
  errors?: FieldErrors<IJoinSchema> | FieldErrors<ILoginSchema>;
  name?: string;
  isboolean?: boolean;
  style?: React.CSSProperties;
}
