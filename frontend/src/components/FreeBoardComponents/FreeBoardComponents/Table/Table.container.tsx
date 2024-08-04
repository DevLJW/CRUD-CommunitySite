import { useQuery } from "@apollo/client";
import TableUI from "./Table.presenter";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_FREE_BOARDS } from "./Table.queries";
import { ITable } from "./Table.interfaces";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { BoardIdState } from "../../../../commons/store";

export default function Table(props: ITable) {
  const router = useRouter();
  const [BoardId, setBoardId] = useRecoilState(BoardIdState);
  const OnclickTitle = (event: any) => {
    router.push(`/FreeBoard/Detail`);

    setBoardId(event.currentTarget.id);
  };
  return <TableUI data={props.data} OnclickTitle={OnclickTitle}></TableUI>;
}
