import { ChangeEvent, useRef } from "react";
import UploadButtonUI from "./uploadbutton.presenter";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./uploadbutton.quries";
import { checkValidationFile } from "../libraries/checkValidationFile";
import { Modal } from "antd";
import { UploadButtonProps } from "./uploadbutton.types";

export default function UploadButton(props: UploadButtonProps) {
  const fileRef = useRef<HTMLInputElement>(null); //  input타입을 useRef로 만든다.
  // const [uploadFile] = useMutation(UPLOAD_FILE);

  const UploadButtonClick = () => {
    fileRef?.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationFile(event?.target?.files?.[0]); // 사용자가 선택한 파일을 나타내는 File 개체가 포함된 FileList에 액세스할 수 있습니다.
    // [0]은 첫번쨰가 아닌 파일리스트를 의미한다.
    console.log(file);
    // if (!file) return;

    // try {
    //   // const result = await uploadFile({ variables: { file } });
    //   // console.log(file);
    //   // props.onChangeFileUrls(result.data.uploadFile.url, props.index); // 파일 Url Hooks 변경
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message });
    // }
  };

  return (
    <UploadButtonUI
      fileRef={fileRef}
      FileUrl={props.FileUrl}
      UploadButtonClick={UploadButtonClick}
      onChangeFile={onChangeFile} // 파일 선택시 onchange 메소드 실행
    ></UploadButtonUI>
  );
}
