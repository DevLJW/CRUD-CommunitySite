import { IRoutingButtonUI } from "./RoutingButton.interfaces";
import { RoutingButtonStyle } from "./RoutingButton.style";

export default function RoutingButtonUI(props: IRoutingButtonUI) {
  return (
    <RoutingButtonStyle style={props.style} onClick={props.OnClick}>
      {props.children}
    </RoutingButtonStyle>
  );
}
