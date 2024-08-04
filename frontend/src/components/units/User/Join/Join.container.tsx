import * as yup from "yup";
import { IJoinSchema } from "./Join.types";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../../../CommonComponents/Form/Form.container";

import FormItem from "../../../CommonComponents/FormItem/FormItem.container";
import Input from "../../../CommonComponents/Input/UserInput/UserInput.container";
import Label from "../../../CommonComponents/Label/TitleLabel/TitleLabel.container";
import SubmitButton from "../../../CommonComponents/SubmitButton/SubmitButton.container";
import { JOIN_USER } from "./Join.queries";
import InsideItemWrapper from "../../../CommonComponents/Wrapper/InsideItemWrapper/InsideItemWrapper.container";
import DuplucationCheckButton from "../../../User/DuplicationCheckButton/DuplicationCheckButton.container";

import HookFormErrorMessage from "../../../User/ErrorMessage/HookFormErrorMessage/HookFormErrorMessage.container";
import SMSMessageCheckButton from "../../../User/SMSMessageButton/SMSMessageCheckButton/SMSMessageCheckButton.container";
import SMSMessageSendButton from "../../../User/SMSMessageButton/SMSMessageSendButton/SMSMessageSendButton.container";

// 이메일 정규표현식
const EmailRegexr =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/;
const state = "Join";
//회원가입 검증 스키마
const JoinSchema = yup.object<IJoinSchema>({
  email: yup
    .string()
    .matches(EmailRegexr, "이메일 형식으로 입력 해주세요.")
    .required("필수 입력값입니다."),
  password: yup
    .string()
    .min(4, "최소 4글자 이상의 패스워드를 입력 해주세요.")
    .max(15, "최대 15글자의 패스워드를 입력 해주세요")
    .required("필수 입력값 입니다."),
  passwordcheck: yup
    .string()
    .required("비밀번호를 동일하게 한번 더 입력 해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  name: yup.string().required("필수 입력값 입니다."),
  nickname: yup.string().required("필수 입력값 입니다."),
  cellphone: yup.string().required("필수 입력값 입니다."),
  smscheck: yup.string().required("필수 입력값 입니다."),
  emailboolean: yup.boolean().oneOf([true], "이메일 중복 버튼을 클릭 해주세요"),
  nicknameboolean: yup
    .boolean()
    .oneOf([true], "닉네임 중복 버튼을 클릭 해주세요"),
  smscheckboolean: yup
    .boolean()
    .oneOf([true], "인증번호 확인 버튼을 클릭 해주세요"),
});

export default function Join(props: any) {
  //회원가입 폼

  const Joinmethods = useForm({
    resolver: yupResolver(JoinSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      nickname: "",
    },
  });
  const [JoinUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(JOIN_USER);

  const onSubmit = async (data: any) => {
    try {
      const joinuser = await JoinUser({
        variables: {
          email: data.email,
          nickname: data.nickname,
          name: data.name,
          password: data.password,
          cellphone: data.cellphone,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onError = (error: any) => {
    console.log("error", error);
  };

  return (
    <>
      <FormProvider {...Joinmethods}>
        <Form
          onSubmit={Joinmethods.handleSubmit(onSubmit, onError)}
          style={{
            width: "100%",
            border: "none",
            margin: "100px",
            paddingTop: "80px",
            paddingLeft: "102px",
            paddingRight: "102px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0px 0px 10px gray",
            maxWidth: "1200px",
          }}
        >
          <Label
            style={{
              fontSize: "30px",
              fontWeight: "800",
              marginLeft: "16px",
              marginBottom: "20px;",
            }}
          >
            회원가입
          </Label>
          <FormItem name="emailLabel">
            <Label
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "16px",
                marginBottom: "20px;",
              }}
            >
              이메일
            </Label>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Input
                name="email"
                state={state}
                style={{
                  width: "calc(100% - 15%)",
                  height: "52px",
                  paddingLeft: "16px",
                  marginLeft: "16px",
                  border: "1px solid #bdbdbd",
                }}
              ></Input>
              <DuplucationCheckButton classname="email"></DuplucationCheckButton>
            </InsideItemWrapper>

            <HookFormErrorMessage
              state={state}
              name="email"
              style={{ marginLeft: "20px", marginTop: "20px", color: "red" }}
            ></HookFormErrorMessage>
          </FormItem>

          <FormItem name="nameLabel">
            <Label
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "16px",
                marginBottom: "20px;",
              }}
            >
              이름
            </Label>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Input
                name="name"
                state={state}
                style={{
                  width: "calc(100% - 15%)",
                  height: "52px",
                  paddingLeft: "16px",
                  marginLeft: "16px",
                  border: "1px solid #bdbdbd",
                }}
              ></Input>
            </InsideItemWrapper>
            <HookFormErrorMessage
              name="name"
              state={state}
              style={{ marginLeft: "20px", marginTop: "20px", color: "red" }}
            ></HookFormErrorMessage>
          </FormItem>

          <FormItem name="nicknameLabel">
            <Label
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "16px",
                marginBottom: "20px;",
              }}
            >
              닉네임
            </Label>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Input
                name="nickname"
                state={state}
                style={{
                  width: "calc(100% - 15%)",
                  height: "52px",
                  paddingLeft: "16px",
                  marginLeft: "16px",
                  border: "1px solid #bdbdbd",
                }}
              ></Input>
              <DuplucationCheckButton classname="nickname"></DuplucationCheckButton>
            </InsideItemWrapper>
            <HookFormErrorMessage
              state={state}
              name="nickname"
              style={{ marginLeft: "20px", marginTop: "20px", color: "red" }}
            ></HookFormErrorMessage>
          </FormItem>

          <FormItem name="passwordLabel">
            <Label
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "16px",
                marginBottom: "20px;",
              }}
            >
              패스워드
            </Label>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Input
                name="password"
                state={state}
                style={{
                  width: "calc(100% - 15%)",
                  height: "52px",
                  paddingLeft: "16px",
                  marginLeft: "16px",
                  border: "1px solid #bdbdbd",
                }}
              ></Input>
            </InsideItemWrapper>
            <HookFormErrorMessage
              state={state}
              name="password"
              style={{ marginLeft: "20px", marginTop: "20px", color: "red" }}
            ></HookFormErrorMessage>
          </FormItem>

          <FormItem name="passwordcheckLabel">
            <Label
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "16px",
                marginBottom: "20px;",
              }}
            >
              패스워드확인
            </Label>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Input
                name="passwordcheck"
                state={state}
                style={{
                  width: "calc(100% - 15%)",
                  height: "52px",
                  paddingLeft: "16px",
                  marginLeft: "16px",
                  border: "1px solid #bdbdbd",
                }}
              ></Input>
            </InsideItemWrapper>
            <HookFormErrorMessage
              state={state}
              name="passwordcheck"
              style={{ marginLeft: "20px", marginTop: "20px", color: "red" }}
            ></HookFormErrorMessage>
          </FormItem>

          <FormItem name="cellphone">
            <Label
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "16px",
                marginBottom: "20px;",
              }}
            >
              연락처
            </Label>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Input
                name="cellphone"
                state={state}
                style={{
                  width: "calc(100% - 15%)",
                  height: "52px",
                  paddingLeft: "16px",
                  marginLeft: "16px",
                  border: "1px solid #bdbdbd",
                }}
              ></Input>
              <SMSMessageSendButton name="SMSMessageSend">
                인증번호발송
              </SMSMessageSendButton>
            </InsideItemWrapper>
            <HookFormErrorMessage
              state={state}
              name="cellphone"
              style={{ marginLeft: "20px", marginTop: "20px", color: "red" }}
            ></HookFormErrorMessage>
          </FormItem>
          <FormItem name="smscheck">
            <Label
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "16px",
                marginBottom: "20px;",
              }}
            >
              인증번호확인
            </Label>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Input
                name="smscheck"
                state={state}
                style={{
                  width: "calc(100% - 15%)",
                  height: "52px",
                  paddingLeft: "16px",
                  marginLeft: "16px",
                  border: "1px solid #bdbdbd",
                }}
              ></Input>
              <SMSMessageCheckButton name="smscheck">
                인증번호확인
              </SMSMessageCheckButton>
            </InsideItemWrapper>
            <HookFormErrorMessage
              state={state}
              name="smscheck"
              style={{ marginLeft: "20px", marginTop: "20px", color: "red" }}
            ></HookFormErrorMessage>
          </FormItem>
          <SubmitButton state={state}></SubmitButton>
        </Form>
      </FormProvider>
    </>
  );
}
