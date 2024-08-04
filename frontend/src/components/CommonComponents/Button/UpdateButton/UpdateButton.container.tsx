import { IUpdateButton } from "./UpdataButton.interfaces";
import UpdateButtonUI from "./UpdateButton.presenter";

export default function UpdateButton(props: IUpdateButton) {
  return <UpdateButtonUI type={props.type}>{props.children}</UpdateButtonUI>;
}
