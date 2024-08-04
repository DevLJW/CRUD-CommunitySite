import { IButtonUI } from "./Button.interfaces";
import { BoardWriteButton } from "./Button.styles";

export default function ButtonUI(props: IButtonUI) {
  return (
    <BoardWriteButton onClick={props.onClickNewBoard}>
      {props.children}
    </BoardWriteButton>
  );
}
