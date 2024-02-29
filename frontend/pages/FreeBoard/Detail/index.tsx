import FreeBoardCommentList from "../../../src/components/units/NoticeBoard/FreeBoard/Comment/List/FreeBoardCommentList.container";
import FreeBoardComment from "../../../src/components/units/NoticeBoard/FreeBoard/Comment/Write/FreeBoardComment.container";
import FreeBoardDetail from "../../../src/components/units/NoticeBoard/FreeBoard/Detail/FreeBoardDetail.container";

export default function BoardDetailPage() {
  return (
    <>
      <FreeBoardDetail></FreeBoardDetail>
      <FreeBoardComment></FreeBoardComment>
      <FreeBoardCommentList></FreeBoardCommentList>
    </>
  );
}
