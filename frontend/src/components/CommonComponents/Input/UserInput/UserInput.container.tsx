import { useFormContext } from "react-hook-form";
import InputUI from "./UserInput.presenter";

import { IJoinSchema } from "../../../units/User/Join/Join.types";
import { ILoginSchema } from "../../../units/User/Login/Login.interfaces";
import { IUserInputInterface, JoinRegister } from "./UserInput.interfaces";
import { IFreeBoardWriteSchema } from "../../../units/NoticeBoard/FreeBoard/Write/FreeBoardWrite.interfaces";
import { IFreeBoardUpdateSchema } from "../../../units/NoticeBoard/FreeBoard/Update/FreeBoardUpdate.interfaces";
import { IFreeBoardCommentWriteSchema } from "../../../units/NoticeBoard/FreeBoard/Comment/Write/FreeBoardComment.interfaces";

export default function UserInput(props: IUserInputInterface) {
  // const { register } = props.isboolean
  //   ? useFormContext<IJoinSchema>()
  //   : useFormContext<ILoginSchema>();

  const { register: JoinRegister } = useFormContext<IJoinSchema>();
  const { register: LoginRegister } = useFormContext<ILoginSchema>();
  const { register: FreeBoardRegister } =
    useFormContext<IFreeBoardWriteSchema>();
  const { register: FreeBoardUpdateRegister } =
    useFormContext<IFreeBoardUpdateSchema>();

  const { register: FreeBoardCommentWriteRegister } =
    useFormContext<IFreeBoardCommentWriteSchema>();

  // const FormContext = useFormContext<IFreeBoardWriteSchema>();
  //   FormContext.getValues("writer")

  if (props.state === "Join") {
    return (
      <>
        <InputUI
          name={props.name}
          JoinRegister={JoinRegister}
          style={props.style}
          state={props.state}
        ></InputUI>
      </>
    );
  }

  if (props.state === "Login") {
    return (
      <>
        <InputUI
          name={props.name}
          LoginRegister={LoginRegister}
          style={props.style}
          state={props.state}
        ></InputUI>
      </>
    );
  }

  if (props.state === "BoardWrite") {
    return (
      <>
        <InputUI
          name={props.name}
          FreeBoardRegister={FreeBoardRegister}
          style={props.style}
          state={props.state}
        ></InputUI>
      </>
    );
  }
  if (props.state === "FreeBoardUpdate") {
    return (
      <>
        <InputUI
          name={props.name}
          FreeBoardUpdateRegister={FreeBoardUpdateRegister}
          style={props.style}
          state={props.state}
        ></InputUI>
      </>
    );
  }
  if (props.state === "FreeBoardCommentWrite") {
    return (
      <>
        <InputUI
          name={props.name}
          FreeBoardCommentWriteRegister={FreeBoardCommentWriteRegister}
          style={props.style}
          state={props.state}
        ></InputUI>
      </>
    );
  } else {
    return null;
  }
}
