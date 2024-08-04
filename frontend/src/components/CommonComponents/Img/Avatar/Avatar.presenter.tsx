import { IAvatarUI } from "./Avatar.interfaces";
import { Avatar } from "./Avatar.styles";

export default function AvatarUI(props: IAvatarUI) {
  return <Avatar style={props.style} src={props.src}></Avatar>;
}
