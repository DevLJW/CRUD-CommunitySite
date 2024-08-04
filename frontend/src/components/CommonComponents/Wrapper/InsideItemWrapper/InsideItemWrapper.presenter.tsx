import { IInsideItemWrapper } from "./InsideItemWrapper.interfaces";
import { InsideItemWrapper } from "./InsideItemWrapper.styles";

export default function InsideItemWrapperUI(props: IInsideItemWrapper) {
  return (
    <InsideItemWrapper style={props.style}>{props.children}</InsideItemWrapper>
  );
}
