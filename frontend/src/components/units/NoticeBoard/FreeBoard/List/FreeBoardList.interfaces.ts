import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IFreeBoardListUI {
  data: Pick<IQuery, "FetchFreeBoards"> | undefined;
  FreeBoardsCounts: Pick<IQuery, "FetchFreeBoardsCounts"> | undefined;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "FetchFreeBoards">>>;
}
