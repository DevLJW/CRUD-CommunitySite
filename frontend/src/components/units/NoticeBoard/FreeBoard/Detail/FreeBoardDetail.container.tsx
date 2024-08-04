import { useMutation, useQuery } from "@apollo/client";
import FreeBoardDetailUI from "./FreeBoardDetail.presenter";
import {
  IMutation,
  IMutationViewsArgs,
  IQuery,
  IQueryFetchFreeBoardArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_FREE_BOARD, FETCH_USER } from "./FreeBoardDetailqueries";
import { useRecoilState, useRecoilValue } from "recoil";
import { BoardIdState } from "../../../../../commons/store";
import { useEffect } from "react";
import { CREATE_VIEWS } from "../List/FreeBoardList.queries";

export default function FreeBoardDetail() {
  const [BoardId, setBoardId] = useRecoilState(BoardIdState);

  const { data, refetch } = useQuery<
    Pick<IQuery, "FetchFreeBoard">,
    IQueryFetchFreeBoardArgs
  >(FETCH_FREE_BOARD, {
    variables: { number: Number(BoardId) },
  });

  const { data: userData } = useQuery<Pick<IQuery, "fetchUser">>(
    FETCH_USER,
    {}
  );

  const [Views] = useMutation<Pick<IMutation, "Views">, IMutationViewsArgs>(
    CREATE_VIEWS
  ); // API 통신 함수
  const onView = async () => {
    const result = await Views({
      variables: {
        BoardId: Number(BoardId),
      },
    });
  };
  useEffect(() => {
    refetch();
    onView();
  }, []);

  return (
    <FreeBoardDetailUI data={data} userData={userData}></FreeBoardDetailUI>
  );
}
