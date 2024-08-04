import { Body } from "../Styles/Styles";

export default function BodyUI(props?: any) {
  return <Body stylesprops={props.styles}>{props.children}</Body>;
}
