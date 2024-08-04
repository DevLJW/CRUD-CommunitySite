import { IContentsWrapper } from "./ContentsWrapper.interface";
import { ContentsWrapperStyle } from "./ContentsWrapper.style";

export default function ContentsWrapper(props: IContentsWrapper) {
  return (
    <ContentsWrapperStyle style={props.style}>
      {props.children}
    </ContentsWrapperStyle>
  );
}
