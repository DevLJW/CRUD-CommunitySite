import { IContentsShow } from "./ContentsShow.interface";
import { ContentsShowStyle } from "./ContentsShow.style";

export default function ContentsShow(props: IContentsShow) {
  return (
    <ContentsShowStyle style={props.style}>{props.children}</ContentsShowStyle>
  );
}
