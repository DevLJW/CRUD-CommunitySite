import { getMyDate } from "../../../../../commons/utils/utils";
import DeleteButton from "../../../../CommonComponents/Button/DeleteButton/DeleButton.container";
import RoutingButton from "../../../../CommonComponents/Button/RoutingButton/RoutingButton.container";
import Contents from "../../../../CommonComponents/Contents/Contents.container";
import ContentsShow from "../../../../CommonComponents/Contents/ContentsShow/ContentsShow";
import Form from "../../../../CommonComponents/Form/Form.container";
import Avatar from "../../../../CommonComponents/Img/Avatar/Avatar.container";
import CreateTimeLabel from "../../../../CommonComponents/Label/CreateTimeLabel/CreateTimeLabel";
import TitleLabel from "../../../../CommonComponents/Label/TitleLabel/TitleLabel.container";
import WriterLabel from "../../../../CommonComponents/Label/WriterLabel/WriterLabel";
import Body from "../../../../CommonComponents/Section/Body/Body";
import ImageSlick from "../../../../CommonComponents/Slick/ImageSlick/ImageSlick.container";

import AvatarWrapper from "../../../../CommonComponents/Wrapper/AvatarWrapper/AvatarWrapper";
import ButtonWrapper from "../../../../CommonComponents/Wrapper/ButtonWrapper/ButtonWrapper";
import CardWrapper from "../../../../CommonComponents/Wrapper/CardWrapper/CardWrapper.container";

import InfoWrapper from "../../../../CommonComponents/Wrapper/InfoWrapper/InfoWrapper";
import TopWrapper from "../../../../CommonComponents/Wrapper/TopWrapper/TopWrapper.container";
import { IFreeBoardDetailUI } from "./FreeBoardDetail.interfaces";

export default function FreeBoardDetailUI(props: IFreeBoardDetailUI) {
  return (
    <Form
      style={{
        width: "100%",
        border: "none",
        marginTop: "100px",
        paddingTop: "80px",
        paddingLeft: "102px",
        paddingRight: "102px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 10px gray",
        maxWidth: "1200px",
      }}
    >
      <TopWrapper>
        <AvatarWrapper>
          <Avatar></Avatar>
          <InfoWrapper
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <WriterLabel>{props.data?.FetchFreeBoard.writer}</WriterLabel>
            <CreateTimeLabel>
              {getMyDate(props.data?.FetchFreeBoard?.createdAt)}
            </CreateTimeLabel>
          </InfoWrapper>
        </AvatarWrapper>
      </TopWrapper>

      <Body style={{ width: "100%", height: "60%" }}>
        <TitleLabel
          style={{
            marginTop: "60px",
          }}
        >
          {props.data?.FetchFreeBoard.title}
        </TitleLabel>
        <ContentsShow
          style={{
            width: "100%",
            minHeight: "100px",
            marginTop: "60px",
            border: "none",
          }}
        >
          {props.data?.FetchFreeBoard?.content}
        </ContentsShow>

        <ImageSlick FileUrl={props.data?.FetchFreeBoard.FileUrls}></ImageSlick>
      </Body>

      <ButtonWrapper
        style={{
          width: "100%",
          marginTop: "60px",
          marginBottom: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RoutingButton state="FreeBoardList">목록으로</RoutingButton>
        <RoutingButton state="FreeBoardUpdate">수정하기</RoutingButton>

        {props.data?.FetchFreeBoard.writer ===
        props.userData?.fetchUser.nickname ? (
          <DeleteButton></DeleteButton>
        ) : (
          ""
        )}
      </ButtonWrapper>
    </Form>
  );
}
