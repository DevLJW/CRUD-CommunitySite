import { ILayoutProps } from "..";
import { IQuery } from "../../types/generated/types";

export interface ILayoutHeaderUI {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;

  onClickMoveToUserJoin: () => void;
  onClickMoveToShoppingBaskets: () => void;
  onClickMoveToFreeBoard: () => void;
  onClickMoveToMarket: () => void;
  onClickMoveToannouncement: () => void;
  // UserInfoData: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}
