import FreeBoardCommentUpdateUI from "./FreeBoardCommentUpdate.presenter";
import * as yup from "yup";
import {
  IFreeBoardCommentUpdate,
  IFreeBoardCommentUpdateSchema,
} from "./FreeBoardCommentUpdate.interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ImgHTMLAttributes } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateFreeBoardCommentArgs,
} from "../../../../../../commons/types/generated/types";
import { UPDATE_FREE_BOARD_COMMENT } from "./FreeBoardCommentUpdate.queries";
const FreeBoardCommentUpdateSchema = yup.object<IFreeBoardCommentUpdateSchema>({
  content: yup.string().required("필수 입력값입니다."),
});
export default function FreeBoardCommentUpdate(props: IFreeBoardCommentUpdate) {
  const FreeBoardCommentUpdateMethod = useForm<any>({
    resolver: yupResolver(FreeBoardCommentUpdateSchema),
    mode: "onChange",
    defaultValues: {
      content: props.el.content,
    },
  });

  const [UpdateFreeBoardComment] = useMutation<
    Pick<IMutation, "UpdateFreeBoardComment">,
    IMutationUpdateFreeBoardCommentArgs
  >(UPDATE_FREE_BOARD_COMMENT); // API 통신 함수

  const onSubmit = async (data: IFreeBoardCommentUpdateSchema) => {
    const result = await UpdateFreeBoardComment({
      variables: {
        updateFreeBoardCommentInput: {
          content: data.content,
        },
        BoardCommentId: props.el.number,
      },
    });

    console.log(result);
  };

  const onError = (error: any) => {
    console.log("error", error);
  };

  return (
    <FreeBoardCommentUpdateUI
      FreeBoardCommentUpdateMethod={FreeBoardCommentUpdateMethod}
      onSubmit={onSubmit}
      onError={onError}
    ></FreeBoardCommentUpdateUI>
  );
}
