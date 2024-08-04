import { IBody } from "./Body.interface";
import { BodyStyle } from "./Body.style";

export default function Body(props: IBody) {
  return <BodyStyle style={props.style}>{props.children}</BodyStyle>;
}
