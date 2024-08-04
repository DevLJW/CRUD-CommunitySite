import { useRouter } from "next/router";
import RoutingButtonUI from "./RoutingButton.presenter";
import { IRoutingButton } from "./RoutingButton.interfaces";

export default function RoutingButton(props: IRoutingButton) {
  const router = useRouter();
  const OnClickList = () => {
    router.push("/FreeBoard/list/");
  };
  const OnClickUpdate = () => {
    router.push("/FreeBoard/Update/");
  };

  if (props.state === "FreeBoardList") {
    return (
      <RoutingButtonUI OnClick={OnClickList}>{props.children}</RoutingButtonUI>
    );
  }

  if (props.state === "FreeBoardUpdate") {
    return (
      <RoutingButtonUI OnClick={OnClickUpdate}>
        {props.children}
      </RoutingButtonUI>
    );
  } else {
    return null;
  }
}
