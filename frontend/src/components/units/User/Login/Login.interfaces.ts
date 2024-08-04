import { UseFormReturn } from "react-hook-form";
import * as yup from "yup";
export interface ILoginSchema {
  email: string;
  password: string;
}
export interface ILoginUIProps {
  LoginSchema: yup.ObjectSchema<{}, ILoginSchema, {}, "">;
  Loginmethods: UseFormReturn<{}, any, undefined>;
  state: string;
}
