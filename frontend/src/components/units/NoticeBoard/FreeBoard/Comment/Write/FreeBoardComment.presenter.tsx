import { FormProvider } from "react-hook-form";
import InsertButton from "../../../../../CommonComponents/Button/InsertButton/InsertButton.container";
import Contents from "../../../../../CommonComponents/Contents/Contents.container";
import ContentsLength from "../../../../../CommonComponents/Contents/Length/ContentsLength";
import Form from "../../../../../CommonComponents/Form/Form.container";
import Icon from "../../../../../CommonComponents/Img/Icon/Icon";
import UserInput from "../../../../../CommonComponents/Input/UserInput/UserInput.container";
import BottomWrapper from "../../../../../CommonComponents/Wrapper/BottomWrapper/BottomWrapper";
import ContentsWrapper from "../../../../../CommonComponents/Wrapper/ContentsWrapper/ContentsWrapper";
import InputWrapper from "../../../../../CommonComponents/Wrapper/InputWrapper/InputWrapper";
import { IFreeBoardCommentUI } from "./FreeBoardComment.interfaces";
import HookFormErrorMessage from "../../../../../User/ErrorMessage/HookFormErrorMessage/HookFormErrorMessage.container";

export default function FreeBoardCommentUI(props: IFreeBoardCommentUI) {
  return (
    <FormProvider {...props.FreeBoardCommentWriteMethod}>
      <Form
        onSubmit={props.FreeBoardCommentWriteMethod.handleSubmit(
          props.onSubmit,
          props.onError
        )}
        style={{
          width: "1200px",
          marginTop: "50px",
        }}
      >
        <Icon
          src="/images/boardComment/write/pencil.png"
          style={{ marginLeft: "20px" }}
        ></Icon>
        <span style={{}}>댓글</span>

        <InputWrapper
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <UserInput
            name="writer"
            state={props.state}
            style={{
              width: "180px",
              height: "52px",
              paddingLeft: "20px",
              border: "1px solid gray",
              marginLeft: "20px",
            }}
          ></UserInput>
        </InputWrapper>
        <ContentsWrapper
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Contents
            name="content"
            state="FreeBoardCommentWrite"
            style={{
              width: "90%",
              minHeight: "108px",
              padding: "20px",
              marginLeft: "20px",
              border: "1px solid gray",
            }}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></Contents>
          <HookFormErrorMessage
            name="content"
            state={props.state}
            style={{ marginLeft: "20px", marginTop: "10px", color: "red" }}
          ></HookFormErrorMessage>
        </ContentsWrapper>
        <BottomWrapper
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ContentsLength
            style={{
              width: "90%",
              height: "51px",
              lineHeight: "51px",
              marginLeft: "25px",
              color: "gray",
            }}
          >
            {props.FreeBoardCommentWriteMethod.watch("content").length
              ? `${
                  props.FreeBoardCommentWriteMethod.watch("content").length
                } / 100`
              : "0/100"}
            {/* {props.FreeBoardCommentWriteMethod.watch("content").length}/100 */}
          </ContentsLength>
          <InsertButton>작성하기</InsertButton>
        </BottomWrapper>
      </Form>
    </FormProvider>
  );
}
