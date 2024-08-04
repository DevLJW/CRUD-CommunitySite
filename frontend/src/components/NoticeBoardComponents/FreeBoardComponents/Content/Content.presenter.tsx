import { ContentRegister, IContentUIInterface } from "./Content.interface";
import { Content } from "./Content.styles";

export default function ContentUI(props: IContentUIInterface) {
  const name = props.name as ContentRegister;
  return <Content {...props.register(name)}></Content>;
}
