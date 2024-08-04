import { IMainWrapper } from "./MainWrapper.interface";
import { MainWrapperStyle } from "./MainWrapper.style";

export default function MainWrapper(props: IMainWrapper) {
  return (
    <MainWrapperStyle style={props.style}>{props.children}</MainWrapperStyle>
  );
}
