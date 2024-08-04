import { IForm } from "./Form.interfaces";
import { Forms } from "./Form.styles";

export default function FormUI(props: IForm) {
  return (
    <Forms
      name="basic"
      style={props.style}
      initialValues={{ remember: true }}
      onFinish={props.onSubmit}
      autoComplete="off"
    >
      {props.children}
    </Forms>
  );
}
