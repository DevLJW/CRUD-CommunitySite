import { IContentsUI, registerType } from "./Contents.interface";
import { ContentsStyle } from "./Contents.style";

export default function ContentsUI(props: IContentsUI) {
  const name = props.name as registerType;
  if (props.FreeBoardCommentUpdateRegister !== undefined)
    return (
      <ContentsStyle
        style={props.style}
        placeholder={props.placeholder}
        {...props.FreeBoardCommentUpdateRegister(name)}
      >
        {props.children}
      </ContentsStyle>
    );
  if (props.FreeBoardCommentWriteRegister !== undefined)
    return (
      <ContentsStyle
        style={props.style}
        placeholder={props.placeholder}
        {...props.FreeBoardCommentWriteRegister(name)}
      >
        {props.children}
      </ContentsStyle>
    );
  else {
    return null;
  }
}
