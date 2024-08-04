import * as yup from "yup";
import FreeBoardWriteUI from "./FreeBoardWrite.presenter";
import { IFreeBoardWriteSchema } from "./FreeBoardWrite.interfaces";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FieldValue,
  FieldValues,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useEffect, useState } from "react";
import { uuidv4 } from "@firebase/util";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateFreeBoardArgs,
  IQuery,
} from "../../../../../commons/types/generated/types";
import { CREATE_FREE_BOARD, FETCH_USER } from "./FreeBoardWrite.queries";

const BoardWriteSchema = yup.object<IFreeBoardWriteSchema>({
  writer: yup.string().required("필수 입력값입니다."),
  password: yup
    .string()
    .min(4, "최소 4글자 이상의 패스워드를 입력 해주세요.")
    .max(15, "최대 15글자의 패스워드를 입력 해주세요")
    .required("필수 입력값 입니다."),
  content: yup.string().required("필수 입력값입니다."),
  title: yup.string().required("필수 입력값입니다."),
});

export default function FreeBoardWrite() {
  const state = "BoardWrite";
  const router = useRouter();
  const [updateState, setupdateState] = useState(""); //이미지 onchange시 전체 리렌더용

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const [CreateFreeBoard] = useMutation<
    Pick<IMutation, "CreateFreeBoard">,
    IMutationCreateFreeBoardArgs
  >(CREATE_FREE_BOARD); // API 통신 함수

  const writername = data?.fetchUser?.nickname;

  const FreeBoardWriteMethod = useForm<any>({
    resolver: yupResolver(BoardWriteSchema),
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
    //  처음 렌더링 될때 실행.
    FreeBoardWriteMethod.setValue("writer", writername);
  }, []);

  useEffect(() => {
    //  리렌더링 될때 마다 실행.
    FreeBoardWriteMethod.setValue("writer", writername);
  });

  const onChangeFileUrls = (FileUrl: string, index: number) => {
    const FileUrlsData = FreeBoardWriteMethod.getValues("FileUrls"); //기존 url값 가져오기
    console.log(FileUrlsData);

    const newFileUrls: string[] = [...FileUrlsData]; //기존 url 값을 새로운 변수에 담아주기

    newFileUrls[index] = FileUrl; //  변경된 index값만 이미지 주소 바꿔주기

    FreeBoardWriteMethod.setValue("FileUrls", newFileUrls); // 작성하고 나서 url값이 배열에 들어감
    setupdateState(uuidv4());
  };

  const onSubmit = async (data: IFreeBoardWriteSchema) => {
    console.log(data);

    const result = await CreateFreeBoard({
      variables: {
        createFreeBoardInput: {
          writer: data.writer,
          title: data.title,
          content: data.content,
          password: data.password,
          FileUrls: data.FileUrls,
        },
      },
    });

    router.push("/");
  };

  const onError = (error: any) => {
    console.log("error", error);
  };
  return (
    <FreeBoardWriteUI
      BoardWriteSchema={BoardWriteSchema}
      state={state}
      FreeBoardWriteMethod={FreeBoardWriteMethod}
      onChangeFileUrls={onChangeFileUrls}
      FileUrlData={FreeBoardWriteMethod.getValues("FileUrls")}
      onSubmit={onSubmit}
      onError={onError}
    ></FreeBoardWriteUI>
  );
}
