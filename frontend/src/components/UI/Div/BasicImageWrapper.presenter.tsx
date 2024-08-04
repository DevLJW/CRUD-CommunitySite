import { ImageWrapper } from "../Styles/Styles";

export default function BasicImageWrapperUI(props: any) {
  return (
    <ImageWrapper stylesprops={props.styles}>{props.children}</ImageWrapper>
  );
}
