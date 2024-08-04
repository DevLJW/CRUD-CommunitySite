import { ICreateItemSchema } from "../../../../components/units/UsedMarket/Upload_Edit/UsedMarketItemUpload_Edit.types";
import { AddressItemInput } from "./UsedMarketItem_Upload_Edit_InputAddress.styles";
import { useFormContext } from "react-hook-form";

export default function UsedMarketItemUploadEditInputAddressUI(props: any) {
  const { register } = useFormContext<ICreateItemSchema>();
  return (
    <AddressItemInput
      {...register(props.name)}
      type={props.type}
    ></AddressItemInput>
  );
}
