import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ISMSMessageButton {
  style?: React.CSSProperties;
  children?: ReactNode;
  SMSMessageSendButtonOnclick?: () => Promise<void>;
  SendMessageCheckOnclick?: () => Promise<void>;

  name?: string;
}
