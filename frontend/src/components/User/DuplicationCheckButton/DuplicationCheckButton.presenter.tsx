import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { IDuplucationCheckButton } from "../User.interfaces";
import { useController } from "react-hook-form";
export default function DuplucationCheckButtonUI(
  props: IDuplucationCheckButton
) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        style={{ width: "118.41px" }}
        {...(props.classname === "email"
          ? { ...props.FormContext?.register("emailboolean") }
          : { ...props.FormContext?.register("nicknameboolean") })}
        variant="contained"
        className={props.classname}
        onClick={
          props.classname === "email"
            ? props.EmailValidateCheckButtonOnclick
            : props.NickNameValidateCheckButtonOnclick
        }
      >
        중복확인하기
      </Button>
    </Stack>
  );
}
