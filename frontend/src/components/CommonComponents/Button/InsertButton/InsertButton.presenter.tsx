import { IInsertButtonUI } from "./InsertButton.interfaces";
import { InsertButtonStyle } from "./InsertButton.style";

export default function InsertButtonUI(props: IInsertButtonUI) {
  return <InsertButtonStyle type="submit">{props.children}</InsertButtonStyle>;
}
