import { useForm } from "react-hook-form";
import { ILoginSchema } from "./Login.interfaces";
import LoginUI from "./Login.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EmailRegexr =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/;
const state = "Login";
const LoginSchema = yup.object<ILoginSchema>({
  email: yup
    .string()
    .matches(EmailRegexr, "이메일 형식으로 입력 해주세요.")
    .required("필수 입력값입니다."),
  password: yup
    .string()
    .min(4, "최소 4글자 이상의 패스워드를 입력 해주세요.")
    .max(15, "최대 15글자의 패스워드를 입력 해주세요")
    .required("필수 입력값 입니다."),
});
export default function Login() {
  //로그인 폼
  const Loginmethods = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <LoginUI
      LoginSchema={LoginSchema}
      Loginmethods={Loginmethods}
      state={state}
    ></LoginUI>
  );
}
