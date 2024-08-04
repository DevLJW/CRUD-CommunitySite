import { useRouter } from "next/router";
import ButtonUI from "./Button.presenter";

export default function Button(props: any) {
  const router = useRouter();
  const onClickNewBoard = () => {
    router.push("/FreeBoard/write");
  };
  return (
    <ButtonUI onClickNewBoard={onClickNewBoard}>{props.children}</ButtonUI>
  );
}
