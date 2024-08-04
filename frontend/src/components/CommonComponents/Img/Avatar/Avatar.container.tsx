import { IAvatar } from "./Avatar.interfaces";
import AvatarUI from "./Avatar.presenter";

export default function Avatar(props: IAvatar) {
  return <AvatarUI style={props.style} src={props.src}></AvatarUI>;
}
