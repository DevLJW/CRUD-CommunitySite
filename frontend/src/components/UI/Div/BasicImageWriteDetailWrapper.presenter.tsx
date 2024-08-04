import { ImageWriteDetailWrapper } from "../Styles/Styles";

export default function BasicImageWriteDetailWrapperUI(props: any) {
  return (
    <ImageWriteDetailWrapper stylesprops={props.styles}>
      {props.children}
    </ImageWriteDetailWrapper>
  );
}
