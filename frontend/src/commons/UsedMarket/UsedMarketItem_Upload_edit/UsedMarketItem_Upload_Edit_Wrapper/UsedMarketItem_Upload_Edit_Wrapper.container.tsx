import UsedMarketItemUploadEditWrapperUI from "./UsedMarketItem_Upload_Edit_Wrapper.presenter";

export default function UsedMarketItemUploadEditWrapper(props: any) {
  return (
    <UsedMarketItemUploadEditWrapperUI
      chidlrenWrapper={props.children}
      onSubmit={props.onSubmit}
    ></UsedMarketItemUploadEditWrapperUI>
  );
}
