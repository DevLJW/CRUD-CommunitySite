import { ILabelWrapper } from "./LabelWrapper.interface";
import { LabelWrapperStyle } from "./LabelWrapper.style";

export default function LabelWrapper(props: ILabelWrapper) {
  return (
    <LabelWrapperStyle style={props.style}>{props.children}</LabelWrapperStyle>
  );
}
