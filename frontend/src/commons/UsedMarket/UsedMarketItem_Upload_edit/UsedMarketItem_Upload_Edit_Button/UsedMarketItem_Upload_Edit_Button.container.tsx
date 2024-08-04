import UsedMarketItemUploadEditButtonUI from "./UsedMarketItem_Upload_Edit_Button.presenter";

export default function UsedMarketItemUploadEditButton(props: any) {
  return (
    <UsedMarketItemUploadEditButtonUI propstype={props}>
      {props.children}
    </UsedMarketItemUploadEditButtonUI>
  );
}
