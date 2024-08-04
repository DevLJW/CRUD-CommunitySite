import { useFormContext } from "react-hook-form";
import { IContents } from "./Contents.interface";
import ContentsUI from "./Contents.presenter";
import { ContentsStyle } from "./Contents.style";
import { IFreeBoardCommentWriteSchema } from "../../units/NoticeBoard/FreeBoard/Comment/Write/FreeBoardComment.interfaces";
import { IFreeBoardCommentUpdateSchema } from "../../units/NoticeBoard/FreeBoard/Comment/Update/FreeBoardCommentUpdate.interfaces";

export default function Contents(props: IContents) {
  const { register: FreeBoardCommentWriteRegister } =
    useFormContext<IFreeBoardCommentWriteSchema>();
  const { register: FreeBoardCommentUpdateRegister } =
    useFormContext<IFreeBoardCommentUpdateSchema>();

  if (props.state === "FreeBoardCommentUpdate") {
    return (
      <ContentsUI
        name={props.name}
        style={props.style}
        placeholder={props.placeholder}
        FreeBoardCommentUpdateRegister={FreeBoardCommentUpdateRegister}
        state={props.state}
      >
        {props.children}
      </ContentsUI>
    );
  }

  if (props.state === "FreeBoardCommentWrite") {
    return (
      <ContentsUI
        name={props.name}
        style={props.style}
        placeholder={props.placeholder}
        FreeBoardCommentWriteRegister={FreeBoardCommentWriteRegister}
        state={props.state}
      >
        {props.children}
      </ContentsUI>
    );
  } else {
    return null;
  }
}
