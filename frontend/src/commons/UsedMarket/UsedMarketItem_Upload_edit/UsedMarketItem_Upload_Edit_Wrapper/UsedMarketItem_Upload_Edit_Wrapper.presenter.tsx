import { Wrapper } from "./UsedMarketItem_Upload_Edit_Wrapper.styles";

export default function UsedMarketItemUploadEditWrapperUI(props: any) {
  return <Wrapper onSubmit={props.onSubmit}>{props.chidlrenWrapper}</Wrapper>;
}
