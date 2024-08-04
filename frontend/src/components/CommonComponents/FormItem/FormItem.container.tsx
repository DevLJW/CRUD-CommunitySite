import { useFormContext } from "react-hook-form";
import { IFormItem } from "./FormItem.interfaces";
import FormItemUI from "./FormItem.presenter";

export default function FormItem(props: IFormItem) {
  return (
    <FormItemUI name={props.name} style={props.style}>
      {props.children}
    </FormItemUI>
  );
}
