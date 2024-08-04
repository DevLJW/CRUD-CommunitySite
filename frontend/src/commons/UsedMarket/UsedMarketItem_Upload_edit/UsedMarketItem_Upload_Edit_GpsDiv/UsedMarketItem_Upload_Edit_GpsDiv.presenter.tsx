import { GpsDiv } from "./UsedMarketItem_Upload_Edit_GpsDiv.styles";

export default function UsedMarketItemUploadEditGpsDivUI(props: any) {
  return (
    <GpsDiv onClick={props.GpsDivProps.onClickAddressSearch}>
      {props.GpsDivProps.children}
    </GpsDiv>
  );
}
