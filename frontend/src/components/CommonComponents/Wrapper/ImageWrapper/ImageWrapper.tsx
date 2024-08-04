import { IIMageWrapper } from "./ImageWrapper.interface";
import { ImageWrapperStyle } from "./ImageWrapper.styles";

export default function ImageWrapper(props: IIMageWrapper) {
  return <ImageWrapperStyle>{props.children}</ImageWrapperStyle>;
}
