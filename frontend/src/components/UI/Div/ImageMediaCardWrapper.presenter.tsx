import { ReactNode } from "react";
import { ImageMediaCardWrapper } from "../Styles/Styles";

interface IImageMediaCardWrapperUI {
  styles?: React.CSSProperties;
  children?: ReactNode;
}

export default function ImageMediaCardWrapperUI(
  props: IImageMediaCardWrapperUI
) {
  return (
    <ImageMediaCardWrapper style={props.styles}>
      {props.children}
    </ImageMediaCardWrapper>
  );
}
