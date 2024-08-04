import { ErrorMessage } from "@hookform/error-message";
import { IHookFormErrorMessage } from "../../User.interfaces";
import { HookFormErrorMessage } from "../../User.styles";

export default function HookFormErrorMessageUI(props: IHookFormErrorMessage) {
  // 로그인 부분
  if (props.state === "Login" && props.name === "email") {
    return (
      <>
        <HookFormErrorMessage style={props.style}>
          {props.LoginError?.email?.message}
        </HookFormErrorMessage>
      </>
    );
  }
  if (props.state === "Login" && props.name === "password") {
    return (
      <>
        <HookFormErrorMessage style={props.style}>
          {props.LoginError?.password?.message}
        </HookFormErrorMessage>
      </>
    );
  }
  //
  //
  //
  //
  //
  //
  //
  // 회원가입 부분
  if (props.name === "email" && props.state === "Join") {
    return (
      <>
        <HookFormErrorMessage style={props.style}>
          {props.JoinError?.email?.message}
        </HookFormErrorMessage>
      </>
    );
  }
  if (props.name === "password" && props.state === "Join") {
    return (
      <>
        <HookFormErrorMessage style={props.style}>
          {props.JoinError?.password?.message}
        </HookFormErrorMessage>
      </>
    );
  }
  if (props.name === "passwordcheck" && props.state === "Join") {
    return (
      <>
        <HookFormErrorMessage style={props.style}>
          {props.JoinError?.passwordcheck?.message}
        </HookFormErrorMessage>
      </>
    );
  }
  if (props.name === "nickname" && props.state === "Join") {
    return (
      <>
        <HookFormErrorMessage style={props.style}>
          {props.JoinError?.nickname?.message}
        </HookFormErrorMessage>
      </>
    );
  }
  //댓글 작성 부분
  if (props.name === "content" && props.state === "FreeBoardCommentWrite") {
    return (
      <>
        <HookFormErrorMessage style={props.style}>
          {props.WriterError?.content?.message}
        </HookFormErrorMessage>
      </>
    );
  } else {
    return null;
  }
}
