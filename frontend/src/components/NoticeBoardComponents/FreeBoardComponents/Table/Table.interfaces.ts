import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ITableUI {
  data: Pick<IQuery, "FetchFreeBoards"> | undefined;
  OnclickTitle: (event: any) => void;
}

export interface ITable {
  data: Pick<IQuery, "FetchFreeBoards"> | undefined;
}
