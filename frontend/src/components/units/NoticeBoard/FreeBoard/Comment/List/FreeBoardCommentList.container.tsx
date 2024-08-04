import { useMutation, useQuery } from "@apollo/client";
import FreeBoardCommentListUI from "./FreeBoardCommentList.presenter";
import { useRecoilState } from "recoil";
import { BoardIdState } from "../../../../../../commons/store";
import {
  IMutation,
  IMutationFreeBoardCommentDeleteArgs,
  IMutationUpdateFreeBoardCommentArgs,
  IQuery,
  IQueryFetchFreeBoardsCommentsArgs,
} from "../../../../../../commons/types/generated/types";
import {
  FETCH_FREE_BOARD_COMMENTS,
  FREE_BOARD_COMMENTS_DELETE,
} from "./FreeBoardCommentList.queries";
import InfiniteScroll from "react-infinite-scroller";
import { useMemo, useState } from "react";
import { UPDATE_FREE_BOARD_COMMENT } from "../Update/FreeBoardCommentUpdate.queries";
import { FETCH_USER } from "../../Detail/FreeBoardDetailqueries";
export default function FreeBoardCommentList() {
  const [BoardId, setBoardId] = useRecoilState(BoardIdState);
  const [content, setcontent] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "FetchFreeBoardsComments">,
    IQueryFetchFreeBoardsCommentsArgs
  >(FETCH_FREE_BOARD_COMMENTS, {
    variables: { BoardId: Number(BoardId), page: 1 }, // 현재 상세 게시글 아이디
  });

  const { data: userData } = useQuery<Pick<IQuery, "fetchUser">>(
    FETCH_USER,
    {}
  );

  //페이지가 스크롤에 닿을때 해당함수 실행
  const Load = () => {
    if (!data) return;
    fetchMore({
      variables: {
        //1페이지 데이터만 가져옴 현재

        page: Number(Math.ceil(data.FetchFreeBoardsComments.length / 10) + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.FetchFreeBoardsComments)
          return { FetchFreeBoardsComments: [...prev.FetchFreeBoardsComments] };

        return {
          //  새롭게 받아올 데이터가 있다면 현재데이터 + 가져온 데이터를 합쳐서 리턴한다.
          FetchFreeBoardsComments: [
            ...prev.FetchFreeBoardsComments,
            ...fetchMoreResult.FetchFreeBoardsComments,
          ],
        };
      },
    });
  };

  const [UpdateFreeBoardComment] = useMutation<
    Pick<IMutation, "UpdateFreeBoardComment">,
    IMutationUpdateFreeBoardCommentArgs
  >(UPDATE_FREE_BOARD_COMMENT); // API 통신 함수

  const [FreeBoardCommentDELETE] = useMutation<
    Pick<IMutation, "FreeBoardCommentDelete">,
    IMutationFreeBoardCommentDeleteArgs
  >(FREE_BOARD_COMMENTS_DELETE); // API 통신 함수

  const OnClickUpdateButton = async (event: any) => {
    const selected = document.querySelector("#textarea");

    if (selected instanceof HTMLElement) {
      const result = await UpdateFreeBoardComment({
        variables: {
          updateFreeBoardCommentInput: {
            content: content,
          },
          BoardCommentId: Number(event.target.id),
        },

        //리패치하기
        refetchQueries: [
          {
            query: FETCH_FREE_BOARD_COMMENTS,
            variables: { BoardId: Number(BoardId), page: 1 },
          },
        ],
      });
    }
  };

  const OnClickDeleteButton = async (event: any) => {
    const result = await FreeBoardCommentDELETE({
      variables: {
        BoardCommentId: Number(event.target.id),
      },

      //리패치하기
      refetchQueries: [
        {
          query: FETCH_FREE_BOARD_COMMENTS,
          variables: { BoardId: Number(BoardId), page: 1 },
        },
      ],
    });
  };

  const OnChangeContent = (event: any) => {
    setcontent(event.target.value);
  };

  return (
    <div>
      <InfiniteScroll pageStart={0} loadMore={Load} hasMore={true}>
        {data?.FetchFreeBoardsComments.map((el) => (
          <FreeBoardCommentListUI
            el={el}
            userData={userData}
            OnClickUpdateButton={OnClickUpdateButton}
            OnChangeContent={OnChangeContent}
            OnClickDeleteButton={OnClickDeleteButton}
          ></FreeBoardCommentListUI>
        ))}
      </InfiniteScroll>
    </div>
  );
}
