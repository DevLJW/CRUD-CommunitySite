import { FormProvider } from "react-hook-form";
import Form from "../../../CommonComponents/Form/Form.container";
import Input from "../../../CommonComponents/Input/UserInput/UserInput.container";
import Label from "../../../CommonComponents/Label/TitleLabel/TitleLabel.container";
import { ILoginUIProps } from "./Login.interfaces";
import FormItem from "../../../CommonComponents/FormItem/FormItem.container";
import InsideItemWrapper from "../../../CommonComponents/Wrapper/InsideItemWrapper/InsideItemWrapper.container";
import HookFormErrorMessage from "../../../User/ErrorMessage/HookFormErrorMessage/HookFormErrorMessage.container";
import SubmitButton from "../../../CommonComponents/SubmitButton/SubmitButton.container";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <FormProvider {...props.Loginmethods}>
      <Form
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
          로그인
        </Label>
        <FormItem name="emailLabel">
          <InsideItemWrapper
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Label
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "16px",
                marginBottom: "20px;",
                width: "65px",
              }}
            >
              이메일
            </Label>
            <Input
              name="email"
              state={props.state}
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
            name="email"
            state={props.state}
            style={{ marginLeft: "100px", marginTop: "20px", color: "red" }}
          ></HookFormErrorMessage>
        </FormItem>

        <FormItem name="passwordLabel">
          <InsideItemWrapper
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Label
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginLeft: "16px",
                marginBottom: "20px;",
                width: "65px",
              }}
            >
              패스워드
            </Label>
            <Input
              name="password"
              state={props.state}
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
            name="password"
            state={props.state}
            style={{ marginLeft: "100px", marginTop: "20px", color: "red" }}
          ></HookFormErrorMessage>
        </FormItem>
        <SubmitButton state={props.state}></SubmitButton>
      </Form>
    </FormProvider>
  );
}
