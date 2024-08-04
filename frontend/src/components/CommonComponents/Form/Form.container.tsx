import { IForm } from "./Form.interfaces";
import FormUI from "./Form.presenter";

export default function Form(props: IForm) {
  return (
    <FormUI onSubmit={props.onSubmit} style={props.style}>
      {" "}
      {props.children}
    </FormUI>
  );
}
