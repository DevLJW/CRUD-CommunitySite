import { IInfoWrapper } from "./InfoWrapper.interface";
import { InfoStyle } from "./InfoWrapper.style";

export default function InfoWrapper(props: IInfoWrapper) {
  return <InfoStyle style={props.style}>{props.children}</InfoStyle>;
}
