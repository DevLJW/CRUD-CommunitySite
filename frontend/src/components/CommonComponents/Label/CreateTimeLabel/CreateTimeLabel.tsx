import { ICreateTimeLabel } from "./CreateTimeLabel.interface";
import { CreateTimeLabelStyle } from "./CreateTimeLabel.style";

export default function CreateTimeLabel(props: ICreateTimeLabel) {
  return (
    <CreateTimeLabelStyle style={props.style}>
      {props.children}
    </CreateTimeLabelStyle>
  );
}
