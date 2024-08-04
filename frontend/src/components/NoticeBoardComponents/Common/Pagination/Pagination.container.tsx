import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPagination } from "./Pagination.interfaces";

export default function Pagination(props: IPagination) {
  const [ClickPage, setClickPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  // (총 게시판 데이터가 존재하면,)1페이지당 10개씩 올림하여 페이지 개수 추출하기(전체 데이터 개수가 15개면 1.5 --> 2개)
  const lastPage = props?.FreeBoardsCounts
    ? Math.ceil(props.FreeBoardsCounts?.FetchFreeBoardsCounts / 10)
    : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const ClickPage = Number(event.currentTarget.id); // 클릭한 페이지 번호 값
    setClickPage(ClickPage);
    props.refetch({ page: ClickPage });
  };

  //  이전 페이지
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  //  다음 페이지
  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
    ></PaginationUI>
  );
}
