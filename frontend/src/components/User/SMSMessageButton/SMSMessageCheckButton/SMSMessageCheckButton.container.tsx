import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { ISMSMessageButton } from "../SMSMessageButton.interfaces";
import SMSMessageButtonUI from "../SMSMessageButton.presenter";
import { SMSMessageData, SMSMessageDataGet } from "../../../../commons/store";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IJoinSchema } from "../../../units/User/Join/Join.types";
import CoolsmsMessageService from "coolsms-node-sdk";
import { message } from "antd";
import axios from "axios";
import * as crypto from "crypto";
import * as request from "node:https";
export default function SMSMessageCheckButton(props: ISMSMessageButton) {
  const [abc1, setabc1] = useRecoilState(SMSMessageData);

  const FormContext = useFormContext<IJoinSchema>();

  const messageService = new CoolsmsMessageService(
    "NCSFRQUS0QTCAX6A",
    "H6FZW1SRYLYUO7FXINVOPFRMLJZVBXJI"
  );

  const SendMessageCheckOnclick = async () => {
    const now = new Date().toISOString();
    const genRanHex = (size: any) =>
      [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");
    const salt = genRanHex(64);
    const message = now + salt;
    const apiKey = "NCSFRQUS0QTCAX6A";
    const apiSecret = "H6FZW1SRYLYUO7FXINVOPFRMLJZVBXJI";
    const signature = crypto
      .createHmac("sha256", apiSecret)
      .update(message)
      .digest("hex");
    // const uri = `/messages/v4/list?limit=10`;
    const uri = `/messages/v4/list?criteria=messageId&value=${abc1.messageId}&cond=eq`;

    axios
      .get(uri, {
        headers: {
          Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${now}, salt=${salt}, signature=${signature}`,
        },
      })
      .then((res) => {
        const regex = /[^0-9]/g;
        const MessageContent = res.data.messageList[abc1.messageId].text;
        const MessageNumber = MessageContent.replace(regex, "");
        const SMSNumberData = FormContext.getValues("smscheck");

        if (MessageNumber === SMSNumberData) {
          FormContext.setValue("smscheckboolean", true);

          console.log("값이 같습니다.");
        } else if (MessageNumber !== SMSNumberData) {
          FormContext.setValue("smscheckboolean", false);
        } else {
          return;
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <SMSMessageButtonUI
      SendMessageCheckOnclick={SendMessageCheckOnclick}
      name={props.name}
    >
      {props.children}
    </SMSMessageButtonUI>
  );
}
