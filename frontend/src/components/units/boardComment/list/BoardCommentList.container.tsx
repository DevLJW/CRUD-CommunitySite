import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";

import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

// 댓글 리스트 컴포넌트(페이지로 반환)(1)
export default function BoardCommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.BoardId) }, // 현재 상세 게시글 아이디
  });
  console.log(data);

  //페이지가 스크롤에 닿을때 해당함수 실행
  const onLoadM = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 }, //몇번째 페이지의 데이터를 받아올지 정한다.
      updateQuery: (prev, { fetchMoreResult }) => {
        //현재 데이터와 가져올데이터
        if (!fetchMoreResult.fetchBoardComments)
          //가져올 데이터가 없다면 현재 데이터만 리턴한다.(더이상 데이터가 없을때)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          //  새롭게 받아올 데이터가 있다면 현재데이터 + 가져온 데이터를 합쳐서 리턴한다.
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return <BoardCommentListUI data={data} onLoadM={onLoadM} />;
}
