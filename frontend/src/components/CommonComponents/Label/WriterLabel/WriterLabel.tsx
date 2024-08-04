import { ILabelWriterLabel } from "./WriterLabel.interface";
import { WriterStyle } from "./WriterLabel.style";

export default function WriterLabel(props: ILabelWriterLabel) {
  return <WriterStyle style={props.style}>{props.children}</WriterStyle>;
}
