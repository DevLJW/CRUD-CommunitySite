import { ChangeEvent, useRef } from "react";
import UploadButtonUI from "./uploadbutton.presenter";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./uploadbutton.quries";

import { Modal } from "antd";
import { UploadButtonProps } from "./uploadbutton.types";
import { checkValidationFile } from "../../../commons/libraries/checkValidationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { useFieldArray } from "react-hook-form";

export default function UploadButton(props: UploadButtonProps) {
  const fileRef = useRef<HTMLInputElement>(null); //  input타입을 useRef로 만든다.
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const UploadButtonClick = () => {
    fileRef?.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationFile(event?.target?.files?.[0]); // 사용자가 선택한 파일이 들어온다 하나씩

    if (!file) return;

    try {
      const result = await uploadFile({
        variables: { file },
        context: { hasUpload: true },
      }); //글로벌 스테이트 리렌더

      props.onChangeFileUrls(result.data.uploadFile, props.index); // 파일 Url Hooks 변경
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <UploadButtonUI
      fileRef={fileRef}
      FileUrl={props.FileUrl}
      UploadButtonClick={UploadButtonClick}
      onChangeFile={onChangeFile} // 파일 선택시 onchange 메소드 실행
      index={props.index}
    ></UploadButtonUI>
  );
}
