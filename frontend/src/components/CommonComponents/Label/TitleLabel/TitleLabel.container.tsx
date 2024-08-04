import { useFormContext } from "react-hook-form";
import { ILabel } from "./TitleLabel.interfaces";
import LabelUI from "./TitleLabel.presenter";
import { IJoinSchema } from "../../../units/User/Join/Join.types";

export default function TitleLabel(props: ILabel) {
  return <LabelUI style={props.style}>{props.children}</LabelUI>;
}
