import FreeBoardCommentUI from "./FreeBoardComment.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFreeBoardCommentWriteSchema } from "./FreeBoardComment.interfaces";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateFreeBoardCommentArgs,
  IQuery,
} from "../../../../../../commons/types/generated/types";
import { FETCH_USER } from "../../Write/FreeBoardWrite.queries";
import { useEffect, useState } from "react";
import { CREATE_FREE_BOARD_COMMENT } from "./FreeBoardComment.queries";
import { useRecoilState } from "recoil";
import { BoardIdState } from "../../../../../../commons/store";
import { FETCH_FREE_BOARD_COMMENTS } from "../List/FreeBoardCommentList.queries";
import { Modal } from "antd";

const FreeBoardCommentWriteSchema = yup.object<IFreeBoardCommentWriteSchema>({
  writer: yup.string().required("필수 입력값입니다."),
  content: yup.string().max(100, "100글자 이하로 입력 해주세요."),
});
export default function FreeBoardComment() {
  const state = "FreeBoardCommentWrite";
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const [BoardId, setBoardId] = useRecoilState(BoardIdState);

  const [CreateFreeBoardComment] = useMutation<
    Pick<IMutation, "CreateFreeBoardComment">,
    IMutationCreateFreeBoardCommentArgs
  >(CREATE_FREE_BOARD_COMMENT); // API 통신 함수

  const FreeBoardCommentWriteMethod = useForm<any>({
    resolver: yupResolver(FreeBoardCommentWriteSchema),
    mode: "onChange",
    defaultValues: {
      writer: "",
      content: "",
    },
  });
  useEffect(() => {
    //  처음 렌더링 되고, data가 변경시 실행
    FreeBoardCommentWriteMethod.setValue("writer", data?.fetchUser?.nickname);
  }, [data]);

  const onSubmit = async (data: IFreeBoardCommentWriteSchema) => {
    if (data.content.length === 0) {
      alert("댓글내용을 입력 해주세요.");
      return;
    }
    const result = await CreateFreeBoardComment({
      variables: {
        createFreeBoardComment: {
          writer: data?.writer,
          content: data?.content,
        },
        BoardId: Number(BoardId),
      },
      refetchQueries: [
        {
          query: FETCH_FREE_BOARD_COMMENTS,
          variables: { BoardId: Number(BoardId), page: 1 },
        },
      ],
    });
  };

  const onError = (error: any) => {
    console.log("error", error);
  };

  return (
    <FreeBoardCommentUI
      FreeBoardCommentWriteMethod={FreeBoardCommentWriteMethod}
      data={data}
      state={state}
      onSubmit={onSubmit}
      onError={onError}
    ></FreeBoardCommentUI>
  );
}
