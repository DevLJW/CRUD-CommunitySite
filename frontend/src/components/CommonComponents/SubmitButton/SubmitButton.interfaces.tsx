import { FieldValues, UseFormGetValues } from "react-hook-form";
import { ILoginSchema } from "../../units/User/Login/Login.interfaces";

export interface ISubmitButton {
  getValues: UseFormGetValues<ILoginSchema>;
  isboolean: boolean;
  state: string;
  onClickSubmitLoginButton?: () => Promise<void>;
}
