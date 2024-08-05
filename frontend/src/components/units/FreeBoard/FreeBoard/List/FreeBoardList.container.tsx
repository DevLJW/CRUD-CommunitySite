import { useMutation, useQuery } from "@apollo/client";
import FreeBoardListUI from "./FreeBoardList.presenter";
import {
  IMutation,
  IMutationViewsArgs,
  IQuery,
} from "../../../../../commons/types/generated/types";
import {
  FETCH_FREE_BOARDS,
  FETCH_FREE_BOARDS_COUNTS,
} from "../../../../FreeBoardBoardComponents/FreeBoardComponents/Table/Table.queries";
import { useEffect } from "react";
import { CREATE_VIEWS } from "./FreeBoardList.queries";

export default function FreeBoardList() {
  //모든 데이터 가져올떄
  const { data, refetch } =
    useQuery<Pick<IQuery, "FetchFreeBoards">>(FETCH_FREE_BOARDS);

  const { data: FreeBoardsCounts } = useQuery<
    Pick<IQuery, "FetchFreeBoardsCounts">
  >(FETCH_FREE_BOARDS_COUNTS);

  useEffect(() => {
    refetch();
  }, []);

  console.log(data);

  return (
    <FreeBoardListUI
      data={data}
      FreeBoardsCounts={FreeBoardsCounts}
      refetch={refetch}
    ></FreeBoardListUI>
  );
}
