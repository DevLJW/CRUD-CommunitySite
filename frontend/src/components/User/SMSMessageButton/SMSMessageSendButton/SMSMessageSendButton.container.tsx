import { useRecoilState } from "recoil";
import { ISMSMessageButton } from "../SMSMessageButton.interfaces";
import SMSMessageButtonUI from "../SMSMessageButton.presenter";

import CoolsmsMessageService from "coolsms-node-sdk";
import { SMSMessageData } from "../../../../commons/store";
import { ApiOne, ApiTwo, SendFrom, SendTo } from "../SMSButtonSetting";

export default function SMSMessageSendButton(props: ISMSMessageButton) {
  const [RecoilSMSMessageData, SetSMSMessageData] =
    useRecoilState(SMSMessageData);

  const token = String(Math.floor(Math.random() * 10 ** 6)).padStart(6, "0"); //토큰발급
  const messageService = new CoolsmsMessageService(ApiOne, ApiTwo);

  const MessageSendOne = async () => {
    const result = await messageService.sendOne({
      to: SendTo,
      from: SendFrom,
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
