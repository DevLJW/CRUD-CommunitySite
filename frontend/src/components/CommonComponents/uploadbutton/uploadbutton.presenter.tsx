import { useFieldArray, useFormContext } from "react-hook-form";
import { InputImage, UploadButton, UploadImage } from "./uploadbutton.styles";
import { UploadButtonUIProps } from "./uploadbutton.types";
import { IFreeBoardWriteSchema } from "../../units/NoticeBoard/FreeBoard/Write/FreeBoardWrite.interfaces";

export default function UploadButtonUI(props: UploadButtonUIProps) {
  const FormContext = useFormContext();

  return (
    <>
      {props.FileUrl ? (
        <UploadImage //file url데이터가 존재할 경우
          onClick={props.UploadButtonClick}
          src={`https://storage.googleapis.com/${props.FileUrl}`}
          {...FormContext.register(`FileUrls`)}
        />
      ) : (
        // 파일데이터가 없는경우
        <UploadButton type="button" onClick={props.UploadButtonClick}>
          +
        </UploadButton>
      )}

      <InputImage
        type="file"
        multiple={true} // 한번에 여러개의 파일 선택가능
        ref={props.fileRef}
        onChange={props.onChangeFile}
      ></InputImage>
    </>
  );
}
