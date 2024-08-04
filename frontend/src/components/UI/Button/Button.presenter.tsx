import { Button } from "../Styles/Styles";

export default function ButtonUI(props: any) {
  return <Button onClick={props.OnClickMethod}>{props.children}</Button>;
}
