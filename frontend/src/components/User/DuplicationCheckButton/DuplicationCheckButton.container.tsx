import { useFormContext } from "react-hook-form";
import { IDuplucationCheckButton } from "../User.interfaces";
import DuplucationCheckButtonUI from "./DuplicationCheckButton.presenter";
import { IJoinSchema } from "../../units/User/Join/Join.types";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryEmailValidateCheckArgs,
  IQueryNickNameValidateCheckArgs,
} from "../../../commons/types/generated/types";
import {
  EMAIL_VALIDATE_CHECK,
  NICKNAME_VALIDATE_CHECK,
} from "../../units/User/Join/Join.queries";

export default function DuplucationCheckButton(props: IDuplucationCheckButton) {
  const FormContext = useFormContext<IJoinSchema>();

  const [emailbutton] = useLazyQuery<
    Pick<IQuery, "EmailValidateCheck">,
    IQueryEmailValidateCheckArgs
  >(EMAIL_VALIDATE_CHECK);

  const [nicknamebutton] = useLazyQuery<
    Pick<IQuery, "NickNameValidateCheck">,
    IQueryNickNameValidateCheckArgs
  >(NICKNAME_VALIDATE_CHECK);

  const EmailValidateCheckButtonOnclick = async () => {
    const email = FormContext.getValues("email");

    const emaildata = await emailbutton({ variables: { email } });

    if (
      emaildata?.data?.EmailValidateCheck.message ===
      "이미 등록된 이메일 입니다."
    ) {
      FormContext.setValue("emailboolean", false);
      FormContext.getValues("passwordcheck");
    } else if (
      emaildata?.data?.EmailValidateCheck.message ===
      "사용 가능한 이메일 입니다."
    ) {
      FormContext.setValue("emailboolean", true);
    }
  };

  const NickNameValidateCheckButtonOnclick = async () => {
    const nickname = FormContext.getValues("nickname");
    const nicknamedata = await nicknamebutton({ variables: { nickname } });

    if (
      nicknamedata.data?.NickNameValidateCheck.message ===
      "이미 등록된 닉네임 입니다."
    ) {
      FormContext.setValue("nicknameboolean", false);
    } else if (
      nicknamedata.data?.NickNameValidateCheck.message ===
      "사용 가능한 닉네임 입니다."
    ) {
      FormContext.setValue("nicknameboolean", true);
    }
  };

  return (
    <DuplucationCheckButtonUI
      classname={props.classname}
      EmailValidateCheckButtonOnclick={EmailValidateCheckButtonOnclick}
      NickNameValidateCheckButtonOnclick={NickNameValidateCheckButtonOnclick}
      FormContext={FormContext}
    ></DuplucationCheckButtonUI>
  );
}
