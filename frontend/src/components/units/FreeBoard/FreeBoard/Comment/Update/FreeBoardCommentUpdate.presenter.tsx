import Form from "../../../../../CommonComponents/Form/Form.container";

import { FormProvider } from "react-hook-form";
import Contents from "../../../../../CommonComponents/Contents/Contents.container";
import { IFreeBoardCommentUpdateUI } from "./FreeBoardCommentUpdate.interfaces";
import UpdateButton from "../../../../../CommonComponents/Button/UpdateButton/UpdateButton.container";

export default function FreeBoardCommentUpdateUI(
  props: IFreeBoardCommentUpdateUI
) {
  return (
    <>
      <FormProvider {...props.FreeBoardCommentUpdateMethod}>
        <Form
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
          onSubmit={props.FreeBoardCommentUpdateMethod.handleSubmit(
            props.onSubmit,
            props.onError
          )}
        >
          <Contents
            name="content"
            state="FreeBoardCommentUpdate"
            style={{ width: "100%" }}
          ></Contents>

          <UpdateButton type="submit">수정하기</UpdateButton>
        </Form>
      </FormProvider>
    </>
  );
}
