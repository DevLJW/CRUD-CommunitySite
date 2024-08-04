import { SubmitButton } from "../../User/User.styles";
import { ISubmitButton } from "./SubmitButton.interfaces";

export default function SubmitButtonUI(props: ISubmitButton) {
  if (props.state === "Login") {
    return (
      <>
        <SubmitButton onClick={props.onClickSubmitLoginButton}>
          로그인
        </SubmitButton>
      </>
    );
  } else if (props.state === "Join") {
    return (
      <>
        <SubmitButton type="submit">회원가입</SubmitButton>
      </>
    );
  } else if (props.state === "BoardWrite") {
    return (
      <>
        <SubmitButton type="submit">작성하기</SubmitButton>
      </>
    );
  } else {
    return null;
  }
}
