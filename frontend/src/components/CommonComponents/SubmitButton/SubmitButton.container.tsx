import { useFormContext } from "react-hook-form";
import SubmitButtonUI from "./SubmitButton.presenter";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../commons/types/generated/types";
import { LOGIN_USER } from "../../units/User/Login/Login.queries";
import { ILoginSchema } from "../../units/User/Login/Login.interfaces";
import { useRouter } from "next/router";
import { Modal } from "antd";

export default function SubmitButton(props: any) {
  const [LoginUser] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN_USER
  );

  const router = useRouter();

  const { getValues } = useFormContext<ILoginSchema>();
  const onClickSubmitLoginButton = async () => {
    try {
      const email = getValues("email");
      const password = getValues("password");
      const result = await LoginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      const accessToken = result?.data?.login?.accesstoken;
      // router.push("/");
      if (!accessToken) {
        return;
      }

      localStorage.setItem("accessToken", accessToken); //로컬스토리지에 저장
      router.push("/");
    } catch (error: any) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <SubmitButtonUI
      state={props.state}
      getValues={getValues}
      isboolean={props.isboolean}
      onClickSubmitLoginButton={onClickSubmitLoginButton}
    ></SubmitButtonUI>
  );
}
