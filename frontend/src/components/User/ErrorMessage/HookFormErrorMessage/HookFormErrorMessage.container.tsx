import { FieldErrors, FormState, useFormContext } from "react-hook-form";
import HookFormErrorMessageUI from "./HookFormErrorMessage.presenter";
import { IJoinSchema } from "../../../units/User/Join/Join.types";

import { error } from "console";
import { Props } from "@hookform/error-message";
import { ILoginSchema } from "../../../units/User/Login/Login.interfaces";
import { IHookFormErrorMessage } from "../../User.interfaces";
import { IFreeBoardCommentWriteSchema } from "../../../units/NoticeBoard/FreeBoard/Comment/Write/FreeBoardComment.interfaces";

export default function HookFormErrorMessage(props: IHookFormErrorMessage) {
  const {
    formState: { errors: JoinError },
  } = useFormContext<IJoinSchema>();

  const {
    formState: { errors: LoginError },
  } = useFormContext<IJoinSchema>();

  const {
    formState: { errors: WriterError },
  } = useFormContext<IFreeBoardCommentWriteSchema>();

  return (
    <HookFormErrorMessageUI
      JoinError={JoinError}
      LoginError={LoginError}
      WriterError={WriterError}
      name={props.name}
      style={props.style}
      state={props.state}
    ></HookFormErrorMessageUI>
  );
}
