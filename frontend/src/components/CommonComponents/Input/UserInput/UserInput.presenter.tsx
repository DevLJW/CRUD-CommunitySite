import { InputStyle } from "./UserInput.styles";
import {
  FreeBoardCommentWriteRegister,
  FreeBoardUpdateRegister,
  FreeBoardWriteRegister,
  IUserInputInterface,
  IUserInputUIInterface,
  JoinRegister,
  LoginRegister,
} from "./UserInput.interfaces";
import { useFormContext } from "react-hook-form";

export default function UserInputUI(props: IUserInputUIInterface) {
  if (props.state === "Join" && props.JoinRegister !== undefined) {
    const name = props.name as JoinRegister;
    return (
      <>
        <InputStyle
          {...props.JoinRegister(name)}
          name={props.name}
          type="text"
          style={props.style}
        ></InputStyle>
      </>
    );
  }
  if (props.state === "Login" && props.LoginRegister !== undefined) {
    const name = props.name as LoginRegister;
    return (
      <>
        <InputStyle
          {...props.LoginRegister(name)}
          name={props.name}
          type="text"
          style={props.style}
        ></InputStyle>
      </>
    );
  }
  if (props.state === "BoardWrite" && props.FreeBoardRegister !== undefined) {
    const name = props.name as FreeBoardWriteRegister;
    return (
      <>
        <InputStyle
          {...props.FreeBoardRegister(name)}
          name={props.name}
          type="text"
          style={props.style}
        ></InputStyle>
      </>
    );
  }
  if (
    props.state === "FreeBoardUpdate" &&
    props.FreeBoardUpdateRegister !== undefined
  ) {
    const name = props.name as FreeBoardUpdateRegister;
    return (
      <>
        <InputStyle
          {...props.FreeBoardUpdateRegister(name)}
          name={props.name}
          type="text"
          style={props.style}
        ></InputStyle>
      </>
    );
  }
  if (
    props.state === "FreeBoardCommentWrite" &&
    props.FreeBoardCommentWriteRegister !== undefined
  ) {
    const name = props.name as FreeBoardCommentWriteRegister;
    return (
      <>
        <InputStyle
          {...props.FreeBoardCommentWriteRegister(name)}
          name={props.name}
          type="text"
          style={props.style}
        ></InputStyle>
      </>
    );
  } else {
    return null;
  }
}
