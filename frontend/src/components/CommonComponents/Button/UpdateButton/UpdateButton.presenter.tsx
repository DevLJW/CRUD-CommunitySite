import { IUpdateButtonUI } from "./UpdataButton.interfaces";
import { UpdateButton } from "./UpdateButton.style";

export default function UpdateButtonUI(props: IUpdateButtonUI) {
  return <UpdateButton type={props.type}>{props.children}</UpdateButton>;
}
