import { IQuery } from "../../../commons/types/generated/types";
import { Img } from "../Styles/Styles";

export default function BasicImgUI(props?: any) {
  return (
    <Img
      stylesprops={props.styles}
      src={
        props.truedata
          ? `https://storage.googleapis.com/${props.truedata}`
          : " "
      }
    >
      {props.children}
    </Img>
  );
}
