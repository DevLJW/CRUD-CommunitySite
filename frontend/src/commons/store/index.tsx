import { atom, atomFamily, selector } from "recoil";

import { SingleMessageSentResponse } from "coolsms-node-sdk";
import { recoilPersist } from "recoil-persist";
type MessageType =
  | "SMS"
  | "LMS"
  | "MMS"
  | "ATA"
  | "CTA"
  | "CTI"
  | "RCS_SMS"
  | "RCS_LMS"
  | "RCS_MMS"
  | "RCS_TPL"
  | "NSA"
  | "";

declare const window: typeof globalThis & {
  kakao: any;
};

// type IBaskets = Array<
//   Pick<IBoard, "contents" | "title" | "_id" | "writer" | "createdAt">
// >;
const { persistAtom } = recoilPersist();
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const LoginUserInfo = atom({
  key: "LoginUserInfo",
  default: {},
});

// export const myPageBaskets = atom<IBaskets>({
//   key: "MyPageBaskets",
//   default: [],
// });

export const KaKaoMap = atom<HTMLElement | null>({
  key: "KaKaoMap",
  default: null,
});

export const SMSMessageData = atom<SingleMessageSentResponse>({
  key: "SMSMessageData",
  default: {
    groupId: "",
    to: "",
    from: "",
    type: "SMS",
    statusMessage: "",
    country: "",
    messageId: "",
    statusCode: "",
    accountId: "",
  },
});

export const SMSMessageDataGet = selector({
  key: "SMSMessageDataGet",
  get: ({ get }) => get(SMSMessageData),
});

export const BoardIdState = atom({
  key: "BoardIdState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
