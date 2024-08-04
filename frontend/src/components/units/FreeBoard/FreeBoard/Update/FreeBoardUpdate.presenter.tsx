import { FormProvider } from "react-hook-form";
import Form from "../../../../CommonComponents/Form/Form.container";
import TitleLabel from "../../../../CommonComponents/Label/TitleLabel/TitleLabel.container";
import FormItem from "../../../../CommonComponents/FormItem/FormItem.container";
import InsideItemWrapper from "../../../../CommonComponents/Wrapper/InsideItemWrapper/InsideItemWrapper.container";
import UserInput from "../../../../CommonComponents/Input/UserInput/UserInput.container";
import Content from "../../../../NoticeBoardComponents/FreeBoardComponents/Content/Content.container";
import ImageWrapper from "../../../../CommonComponents/Wrapper/ImageWrapper/ImageWrapper";
import UploadButton from "../../../../CommonComponents/uploadbutton/uploadbutton.container";

import { IFreeBoardUpdateUI } from "./FreeBoardUpdate.interfaces";
import { uuidv4 } from "@firebase/util";
import UpdateButton from "../../../../CommonComponents/Button/UpdateButton/UpdateButton.container";
export default function FreeBoardUpdateUI(props: IFreeBoardUpdateUI) {
  return (
    <FormProvider {...props.FreeBoardUpdateMethod}>
      <Form
        onSubmit={props.FreeBoardUpdateMethod.handleSubmit(
          props.onSubmit,
          props.onError
        )}
        style={{
          width: "100%",
          border: "none",
          margin: "100px",
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
        <TitleLabel
          style={{
            fontSize: "30px",
            fontWeight: "800",
            marginLeft: "16px",
            marginBottom: "20px;",
          }}
        >
          {" "}
          게시글수정
        </TitleLabel>

        <FormItem>
          <InsideItemWrapper
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <InsideItemWrapper
              style={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <InsideItemWrapper
                style={{
                  width: "95%",
                }}
              >
                <TitleLabel
                  style={{
                    fontSize: "16px",
                    fontWeight: "800",
                    marginBottom: "20px;",
                  }}
                >
                  {" "}
                  작성자
                </TitleLabel>
              </InsideItemWrapper>
              <InsideItemWrapper
                style={{
                  width: "100%",
                }}
              >
                <UserInput
                  name="writer"
                  state={props.state}
                  style={{
                    width: "95%",
                    height: "52px",
                    paddingLeft: "16px",
                    border: "1px solid #bdbdbd",
                  }}
                ></UserInput>
              </InsideItemWrapper>
            </InsideItemWrapper>

            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <InsideItemWrapper
                style={{
                  width: "95%",
                }}
              >
                <TitleLabel
                  style={{
                    fontSize: "16px",
                    fontWeight: "800",
                    marginBottom: "20px;",
                  }}
                >
                  {" "}
                  비밀번호
                </TitleLabel>
              </InsideItemWrapper>
              <InsideItemWrapper
                style={{
                  width: "95%",
                }}
              >
                <UserInput
                  name="password"
                  state={props.state}
                  style={{
                    width: "100%",
                    height: "52px",
                    paddingLeft: "16px",
                    border: "1px solid #bdbdbd",
                  }}
                ></UserInput>
              </InsideItemWrapper>
            </InsideItemWrapper>
          </InsideItemWrapper>
          <FormItem>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TitleLabel
                style={{
                  fontSize: "16px",
                  fontWeight: "800",
                  marginBottom: "20px;",
                }}
              >
                {" "}
                제목
              </TitleLabel>
              <UserInput
                name="title"
                state={props.state}
                style={{
                  width: "100%",
                  height: "52px",
                  paddingLeft: "16px",
                  border: "1px solid #bdbdbd",
                }}
              ></UserInput>
            </InsideItemWrapper>
          </FormItem>

          <FormItem>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TitleLabel
                style={{
                  fontSize: "16px",
                  fontWeight: "800",
                  marginBottom: "20px;",
                }}
              >
                {" "}
                내용
              </TitleLabel>
              <Content name="content"></Content>
            </InsideItemWrapper>
          </FormItem>
          <FormItem>
            <InsideItemWrapper
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TitleLabel
                style={{
                  fontSize: "16px",
                  fontWeight: "800",
                  marginBottom: "20px;",
                }}
              >
                {" "}
                이미지 업로드
              </TitleLabel>
              <ImageWrapper
                style={{
                  width: "100%",
                  paddingTop: "40px",
                  marginLeft: "0px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {props?.FileUrlData?.map((el: any, index: any) => (
                  <UploadButton
                    key={uuidv4()}
                    index={index}
                    onChangeFileUrls={props.onChangeFileUrls}
                    FileUrl={el}
                  ></UploadButton>
                ))}
              </ImageWrapper>
            </InsideItemWrapper>
          </FormItem>
        </FormItem>
        <UpdateButton type="submit">수정하기</UpdateButton>
      </Form>
    </FormProvider>
  );
}
