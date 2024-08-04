import { useFormContext } from "react-hook-form";
import ContentUI from "./Content.presenter";
import { IFreeBoardWriteSchema } from "../../../units/NoticeBoard/FreeBoard/Write/FreeBoardWrite.interfaces";
import { IContentInterface, IContentUIInterface } from "./Content.interface";

export default function Content(props: IContentInterface) {
  const { register } = useFormContext<IFreeBoardWriteSchema>();
  return <ContentUI register={register} name={props.name}></ContentUI>;
}
