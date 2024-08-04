import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../../../CommonComponents/Form/Form.container";
import FormItem from "../../../../CommonComponents/FormItem/FormItem.container";
import UserInput from "../../../../CommonComponents/Input/UserInput/UserInput.container";
import TitleLabel from "../../../../CommonComponents/Label/TitleLabel/TitleLabel.container";
import InsideItemWrapper from "../../../../CommonComponents/Wrapper/InsideItemWrapper/InsideItemWrapper.container";
import {
  FieldValue,
  FormProvider,
  SubmitHandler,
  UseFormRegister,
  useForm,
  useFormContext,
} from "react-hook-form";
import * as yup from "yup";
import {
  IFreeBoardWriteSchema,
  IFreeBoardWriteUI,
} from "./FreeBoardWrite.interfaces";
import Content from "../../../../NoticeBoardComponents/FreeBoardComponents/Content/Content.container";
import UploadButton from "../../../../CommonComponents/uploadbutton/uploadbutton.container";
import ImageWrapper from "../../../../CommonComponents/Wrapper/ImageWrapper/ImageWrapper";
import { FreeBoardWriteRegister } from "../../../../CommonComponents/Input/UserInput/UserInput.interfaces";
import { uuidv4 } from "@firebase/util";
import SubmitButton from "../../../../CommonComponents/SubmitButton/SubmitButton.container";

export default function FreeBoardWriteUI(props: IFreeBoardWriteUI) {
  return (
    <>
      <FormProvider {...props.FreeBoardWriteMethod}>
        <Form
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
          onSubmit={props.FreeBoardWriteMethod.handleSubmit(
            props.onSubmit,
            props.onError
          )}
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
            게시글작성
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
                  {props.FileUrlData.map((el: any, index: any) => (
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
          <SubmitButton state={props.state}></SubmitButton>
        </Form>
      </FormProvider>
    </>
  );
}
