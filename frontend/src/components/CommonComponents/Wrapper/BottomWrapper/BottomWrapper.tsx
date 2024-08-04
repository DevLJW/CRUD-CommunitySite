import { IBottomWrapper } from "./BottomWrapper.interface";
import { BottomWrapperStyle } from "./BottomWrapper.style";

export default function BottomWrapper(props: IBottomWrapper) {
  return (
    <BottomWrapperStyle style={props.style}>
      {props.children}
    </BottomWrapperStyle>
  );
}
