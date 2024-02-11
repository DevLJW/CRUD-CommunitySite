import { useRecoilState } from "recoil";
import { ISMSMessageButton } from "../SMSMessageButton.interfaces";
import SMSMessageButtonUI from "../SMSMessageButton.presenter";

import CoolsmsMessageService from "coolsms-node-sdk";
import { SMSMessageData } from "../../../../commons/store";

export default function SMSMessageSendButton(props: ISMSMessageButton) {
  const [RecoilSMSMessageData, SetSMSMessageData] =
    useRecoilState(SMSMessageData);

  const token = String(Math.floor(Math.random() * 10 ** 6)).padStart(6, "0"); //토큰발급
  const messageService = new CoolsmsMessageService(
    "NCSFRQUS0QTCAX6A",
    "H6FZW1SRYLYUO7FXINVOPFRMLJZVBXJI"
  );

  const MessageSendOne = async () => {
    const result = await messageService.sendOne({
      to: "01020145275",
      from: "01020145275",
      text: `인증번호는 ${token} 입니다.`,
      autoTypeDetect: true,
    });

    return result;
  };

  const SMSMessageSendButtonOnclick = async () => {
    const MessageSendOneData = await MessageSendOne();
    SetSMSMessageData(MessageSendOneData);
    console.log(SMSMessageData);
  };
  return (
    <SMSMessageButtonUI
      SMSMessageSendButtonOnclick={SMSMessageSendButtonOnclick}
      name={props.name}
    >
      {props.children}
    </SMSMessageButtonUI>
  );
}
