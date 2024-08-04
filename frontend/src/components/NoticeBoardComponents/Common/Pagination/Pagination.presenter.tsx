import { IPaginationUI } from "./Pagination.interfaces";
import { Page } from "./Pagination.styles";

export default function PaginationUI(props: IPaginationUI) {
  return (
    <div style={{ display: "flex" }}>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {Array(10)
        .fill(1)
        .map(
          (
            el,
            index //1페이지부터 보여주기 위해
          ) =>
            props.startPage + index <= props.lastPage && (
              <Page
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
              >
                {index + props.startPage}
              </Page>
            )
        )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
