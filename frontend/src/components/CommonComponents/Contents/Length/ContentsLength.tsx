import { useFormContext } from "react-hook-form";
import IContentsLength from "./ContentsLength.interface";
import { ContentsLengthStyle } from "./ContentsLength.style";
import { FreeBoardWriteRegister } from "../../Input/UserInput/UserInput.interfaces";

export default function ContentsLength(props: IContentsLength) {
  return (
    <ContentsLengthStyle style={props.style}>
      {props.children}
    </ContentsLengthStyle>
  );
}
