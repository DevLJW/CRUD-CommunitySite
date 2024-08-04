import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IPagination {
  FreeBoardsCounts: Pick<IQuery, "FetchFreeBoardsCounts"> | undefined;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "FetchFreeBoards">>>;
}

export interface IPaginationUI {
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
}
