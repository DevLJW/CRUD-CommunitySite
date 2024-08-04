import { ILabel } from "./TitleLabel.interfaces";
import { Label } from "./TitleLabel.styles";

export default function TitleLabelUI(props: ILabel) {
  return <Label style={props.style}>{props.children}</Label>;
}
