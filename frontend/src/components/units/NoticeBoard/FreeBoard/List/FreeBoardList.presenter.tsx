import OutSideBorderWrapper from "../../../../CommonComponents/Wrapper/OutSideBorderWrapper/OutSideBorderWrapper.container";
import Pagination from "../../../../NoticeBoardComponents/Common/Pagination/Pagination.container";

import Button from "../../../../NoticeBoardComponents/FreeBoardComponents/Button/Button.container";
import Table from "../../../../NoticeBoardComponents/FreeBoardComponents/Table/Table.container";
import { IFreeBoardListUI } from "./FreeBoardList.interfaces";

export default function FreeBoardListUI(props: IFreeBoardListUI) {
  return (
    <OutSideBorderWrapper>
      <Table data={props.data}></Table>
      <Pagination
        FreeBoardsCounts={props.FreeBoardsCounts}
        refetch={props.refetch}
      ></Pagination>
      <Button>게시글작성</Button>
    </OutSideBorderWrapper>
  );
}
