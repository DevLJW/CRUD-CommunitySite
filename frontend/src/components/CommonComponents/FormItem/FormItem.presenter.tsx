import { IFormItem } from "./FormItem.interfaces";
import { FormItem } from "./FormItem.styles";

export default function FormItemUI(props: IFormItem) {
  return <FormItem className={props.name}>{props.children}</FormItem>;
}
