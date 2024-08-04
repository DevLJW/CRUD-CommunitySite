import { SubmitButton } from "./UsedMarketItem_Upload_Edit_Button.styles";

export default function UsedMarketItemUploadEditButtonUI(props: any) {
  return <SubmitButton type={props.propstype}>{props.children}</SubmitButton>;
}
