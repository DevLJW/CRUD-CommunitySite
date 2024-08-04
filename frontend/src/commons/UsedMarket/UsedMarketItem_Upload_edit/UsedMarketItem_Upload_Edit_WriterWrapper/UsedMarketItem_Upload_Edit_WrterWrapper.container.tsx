import UsedMarketItemUploadEditWriterWrapperUI from "./UsedMarketItem_Upload_Edit_WrterWrapper.presenter";

export default function UsedMarketItemUploadEditWriterWrapper(props: any) {
  return (
    <UsedMarketItemUploadEditWriterWrapperUI
      childrenWriterWrapper={props.children}
    ></UsedMarketItemUploadEditWriterWrapperUI>
  );
}
