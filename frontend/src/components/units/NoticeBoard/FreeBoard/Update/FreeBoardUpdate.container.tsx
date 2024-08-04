import FreeBoardUpdateUI from "./FreeBoardUpdate.presenter";

import * as yup from "yup";
import { IFreeBoardUpdateSchema } from "./FreeBoardUpdate.interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import { BoardIdState } from "../../../../../commons/store";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateFreeBoardArgs,
  IQuery,
  IQueryFetchFreeBoardArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_FREE_BOARD } from "../Detail/FreeBoardDetailqueries";
import { useEffect, useState } from "react";
import { uuidv4 } from "@firebase/util";
import { UPDATE_FREE_BOARD } from "./FreeBoardUpdate.queries";
const BoardUpdateSchema = yup.object<IFreeBoardUpdateSchema>({
  writer: yup.string().required("필수 입력값입니다."),
  password: yup
    .string()
    .min(4, "최소 4글자 이상의 패스워드를 입력 해주세요.")
    .max(15, "최대 15글자의 패스워드를 입력 해주세요")
    .required("필수 입력값 입니다."),
  content: yup.string().required("필수 입력값입니다."),
  title: yup.string().required("필수 입력값입니다."),
});

export default function FreeBoardUpdate() {
  const state = "FreeBoardUpdate";
  const [BoardId, setBoardId] = useRecoilState(BoardIdState);
  const [updateState, setupdateState] = useState(""); //이미지 onchange시 전체 리렌더용
  const { data } = useQuery<
    Pick<IQuery, "FetchFreeBoard">,
    IQueryFetchFreeBoardArgs
  >(FETCH_FREE_BOARD, {
    variables: { number: Number(BoardId) },
  });
  const FreeBoardUpdateMethod = useForm<any>({
    resolver: yupResolver(BoardUpdateSchema),
    mode: "onChange",
    defaultValues: {
      writer: "",
      password: "",
      title: "",
      content: "",
      FileUrls: ["", "", ""],
    },
  });

  useEffect(() => {
    FreeBoardUpdateMethod.reset({
      writer: data?.FetchFreeBoard?.writer,
      password: data?.FetchFreeBoard?.password,
      title: data?.FetchFreeBoard?.title,
      content: data?.FetchFreeBoard?.content,
      FileUrls: data?.FetchFreeBoard?.FileUrls,
    });
  }, [data]); // 1. 컴포넌트가 처음 렌더링된 이후 실행 2. data가 변경되어 컴포넌트가 [다시 랜더링 된 후 실행](새로고침 시, undenfiend 이후 데이터가 들어와서)

  const FileUrlData = FreeBoardUpdateMethod.getValues("FileUrls");
  const [UpdateFreeBoard] = useMutation<
    Pick<IMutation, "UpdateFreeBoard">,
    IMutationUpdateFreeBoardArgs
  >(UPDATE_FREE_BOARD); // API 통신 함수

  console.log(FileUrlData);
  const onSubmit = async (data: IFreeBoardUpdateSchema) => {
    console.log(data);
    const result = await UpdateFreeBoard({
      variables: {
        updateFreeBoardInput: {
          writer: data?.writer,
          password: data?.password,
          title: data?.title,
          content: data?.content,
          FileUrls: data?.FileUrls,
        },
        BoardId: Number(BoardId),
      },
    });
  };

  const onError = (error: any) => {
    console.log("error", error);
  };
  const onChangeFileUrls = (FileUrl: string, index: number) => {
    const FileUrlsData = FreeBoardUpdateMethod.getValues("FileUrls"); //기존 url값 가져오기

    const newFileUrls: string[] = [...FileUrlsData]; //기존 url 값을 새로운 변수에 담아주기

    newFileUrls[index] = FileUrl; //  변경된 index값만 이미지 주소 바꿔주기
    FreeBoardUpdateMethod.setValue("FileUrls", newFileUrls);
    setupdateState(uuidv4());
  };

  return (
    <FreeBoardUpdateUI
      FreeBoardUpdateMethod={FreeBoardUpdateMethod}
      state={state}
      onSubmit={onSubmit}
      onError={onError}
      onChangeFileUrls={onChangeFileUrls}
      FileUrlData={FileUrlData}
    ></FreeBoardUpdateUI>
  );
}
