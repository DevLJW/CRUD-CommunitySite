import { IInsertButton } from "./InsertButton.interfaces";
import InsertButtonUI from "./InsertButton.presenter";

export default function InsertButton(props: IInsertButton) {
  return <InsertButtonUI>{props.children}</InsertButtonUI>;
}
