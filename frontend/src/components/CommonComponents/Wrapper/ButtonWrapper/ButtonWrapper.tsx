import { IButtonWrapper } from "./ButtonWrapper.interface";
import { ButtonWrapperStyle } from "./ButtonWrapper.style";

export default function ButtonWrapper(props: IButtonWrapper) {
  return (
    <ButtonWrapperStyle style={props.style}>
      {props.children}
    </ButtonWrapperStyle>
  );
}
