import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";
import ContentsShow from "../../../../../CommonComponents/Contents/ContentsShow/ContentsShow";
import Form from "../../../../../CommonComponents/Form/Form.container";
import Avatar from "../../../../../CommonComponents/Img/Avatar/Avatar.container";
import Icon from "../../../../../CommonComponents/Img/Icon/Icon";
import CreateTimeLabel from "../../../../../CommonComponents/Label/CreateTimeLabel/CreateTimeLabel";
import WriterLabel from "../../../../../CommonComponents/Label/WriterLabel/WriterLabel";
import LabelWrapper from "../../../../../CommonComponents/Wrapper/LabelWrapper/LabelWrapper";
import MainWrapper from "../../../../../CommonComponents/Wrapper/MainWrapper/MainWrapper";
import { IFreeBoardCommentListUI } from "./FreeBoardCommentList.interfaces";
import { useState } from "react";
import { getMyDate } from "../../../../../../commons/utils/utils";

export default function FreeBoardCommentListUI(props: IFreeBoardCommentListUI) {
  const [updateimgclick, setupdateimgclick] = useState(false); //
  const [returnimgclick, setreturnimgclick] = useState(false);

  const [updateimg, setupdateimg] = useState(true);
  const [deleteimg, setdeleteimg] = useState(true);
  const [returnimg, setreturnimg] = useState(false);

  const cancelclick = () => {
    setupdateimgclick(false);
  };
  const updateclick = () => {
    setupdateimgclick(true); // 텍스트아레아와 수정하기 버튼 보여줌
    setreturnimgclick(true); // 리턴 보여줌
    setupdateimg(false);
    setdeleteimg(false);
    setreturnimg(true);
  };

  const returnclick = () => {
    setupdateimgclick(false);
    setupdateimg(true);
    setdeleteimg(true);
    setreturnimg(false);
  };

  return (
    <Form
      style={{
        width: "1200px",
        marginTop: "20px",
        marginLeft: "40px",
      }}
    >
      <div style={{ flex: "display", flexDirection: "row" }}>
        <Avatar
          style={{ width: "48px", height: "48px", marginLeft: "0px" }}
          src="/images/avatar.png"
        ></Avatar>
        <MainWrapper
          style={{
            width: "100%",
          }}
        >
          <LabelWrapper
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <WriterLabel style={{ fontSize: "25px", fontWeight: "bold" }}>
              {props.el.writer}
            </WriterLabel>
          </LabelWrapper>
          {updateimgclick ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <textarea
                id="textarea"
                style={{ width: "70%", height: "100%" }}
                onChange={props.OnChangeContent}
              >
                {props.el.content}
              </textarea>
              <button
                id={String(props.el.number)}
                style={{ width: "10%", height: "25px" }}
                onClick={() => {
                  props.OnClickUpdateButton(event), setupdateimgclick(false);
                }}
              >
                수정하기
              </button>
            </div>
          ) : (
            <ContentsShow>{props.el.content}</ContentsShow>
          )}
        </MainWrapper>
        {props.el.writer === props.userData?.fetchUser.nickname ? (
          <div
            className="IconWrapper"
            style={{ flex: "display", flexDirection: "row" }}
          >
            {/* //  수정 버튼 */}
            {updateimg ? (
              <Icon
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                src="/images/boardComment/list/option_update_icon.png/"
                updateclick={updateclick}
                state="update"
                id={String(props.el.number)}
              ></Icon>
            ) : (
              ""
            )}

            {/* //  삭제 버튼 */}
            {deleteimg ? (
              <Icon
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                src="/images/boardComment/list/option_delete_icon.png/"
                deleteclick={props.OnClickDeleteButton}
                state="delete"
                id={String(props.el.number)}
              ></Icon>
            ) : (
              ""
            )}

            {returnimg ? (
              <Icon
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                src="/images/boardComment/list/option_return_icon.png/"
                returnclick={returnclick}
                state="return"
                id={String(props.el.number)}
              ></Icon>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <CreateTimeLabel style={{ color: "light gray" }}>
        {getMyDate(props.el.createdAt)}
      </CreateTimeLabel>
    </Form>
  );
}
