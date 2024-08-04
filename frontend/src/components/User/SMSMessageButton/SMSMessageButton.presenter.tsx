import {
  SMSMessageButtonStack,
  SMSMessagebutton,
} from "./SMSMessageButton.Style";
import { ISMSMessageButton } from "./SMSMessageButton.interfaces";

export default function SMSMessageButtonUI(props: ISMSMessageButton) {
  return (
    <SMSMessageButtonStack spacing={2} direction="row">
      <SMSMessagebutton
        variant="contained"
        onClick={
          props.name === "SMSMessageSend"
            ? props.SMSMessageSendButtonOnclick
            : props.SendMessageCheckOnclick
        }
      >
        {props.children}
      </SMSMessagebutton>
    </SMSMessageButtonStack>
  );
}
