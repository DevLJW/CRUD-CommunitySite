import SelectAutoWidth from "../../../components/UI/Select/BasicSelect/SelectAuto.presenter";
import BasicSelect from "../../../components/UI/Select/BasicSelect/SelectAuto.presenter";
import { BMHANNAPro } from "../../Font/Font";
import LayoutNavigation from "../navigation/LayoutNavigation.container";
import {
  InnerWrapper,
  Wrapper,
  InnerLogo,
  InnerButton,
} from "./LayoutHeader.styles";
import { ILayoutHeaderUI } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUI) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>💎 LIVE</InnerLogo>
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",

            marginRight: "40px",
          }}
        >
          <SelectAutoWidth
            onClickMoveToFreeBoard={props.onClickMoveToFreeBoard}
            onClickMoveToMarket={props.onClickMoveToMarket}
            onClickMoveToannouncement={props.onClickMoveToannouncement}
          ></SelectAutoWidth>
          <span
            className={BMHANNAPro.className}
            style={{ color: "black", fontSize: "larger" }}
            onClick={props.UserInfoData ? exam : props.onClickMoveToLogin}
          >
            {props.UserInfoData
              ? props.UserInfoData.fetchUserLoggedIn.name
              : "로그인"}
          </span>
          <span
            style={{
              color: "black",
              fontSize: "larger",
            }}
            className={BMHANNAPro.className}
            onClick={props.UserInfoData ? exam : props.onClickMoveToUserJoin}
          >
            {props.UserInfoData ? "로그아웃" : "회원가입"}
          </span>
          <span
            style={{ color: "black", fontSize: "larger" }}
            className={BMHANNAPro.className}
            onClick={props.onClickMoveToShoppingBaskets}
          >
            마이페이지
          </span>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
