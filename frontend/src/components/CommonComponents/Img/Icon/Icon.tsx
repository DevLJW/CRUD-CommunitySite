import { IIcon } from "./Icon.interface";
import { IconStyle } from "./Icon.style";

export default function Icon(props: IIcon) {
  if (props.state === "update") {
    return (
      <IconStyle
        src={props.src}
        onClick={props.updateclick}
        id={props.id}
        style={props.style}
      ></IconStyle>
    );
  }

  if (props.state === "delete") {
    return (
      <IconStyle
        src={props.src}
        onClick={props.deleteclick}
        id={props.id}
        style={props.style}
      ></IconStyle>
    );
  }

  if (props.state === "return") {
    return (
      <IconStyle
        src={props.src}
        onClick={props.returnclick}
        id={props.id}
        style={props.style}
      ></IconStyle>
    );
  }
  return null;
}
