import { WithAuth } from "../src/commons/hocs/withAuth";
import BoardListPage from "../src/components/units/board/list/BoardList.container";
import Main from "./Main";

// function MainPage() {
//   return <BoardListPage isBoolean={true}></BoardListPage>;
// }

function MainPage() {
  return <Main></Main>;
}

// export default WithAuth(BoardsPage); //  app.tsx Component에 묶어서 전달
export default MainPage;
