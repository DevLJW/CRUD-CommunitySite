import { IInputWrapper } from "./InputWrapper.interfaces";
import { InputWrapperStyle } from "./InputWrapper.style";

export default function InputWrapper(props: IInputWrapper) {
  return (
    <InputWrapperStyle style={props.style}>{props.children}</InputWrapperStyle>
  );
}
