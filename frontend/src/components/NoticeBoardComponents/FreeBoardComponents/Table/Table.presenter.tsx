import { ITableUI } from "./Table.interfaces";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMyDate } from "../../../../commons/utils/utils";

export default function TableUI(props: ITableUI) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">게시글 번호</TableCell>
            <TableCell align="center">제목</TableCell>
            <TableCell align="center">작성자</TableCell>

            <TableCell align="center">작성일</TableCell>
            <TableCell align="center">조회수</TableCell>
          </TableRow>
        </TableHead>
        {/* 10개까지만 보여주기 */}
        <TableBody>
          {props.data?.FetchFreeBoards?.map(
            (data, index) =>
              index + 1 <= 10 && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {data?.number}
                  </TableCell>
                  <TableCell
                    id={String(data.number)}
                    align="center"
                    key={data?.number}
                    onClick={props.OnclickTitle}
                  >
                    {data?.title}
                  </TableCell>
                  <TableCell align="center">{data?.writer}</TableCell>

                  <TableCell align="center">
                    {getMyDate(data?.createdAt)}
                  </TableCell>
                  <TableCell align="center">{data?.views}</TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
