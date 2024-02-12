import { atom, atomFamily, selector } from "recoil";

import { useEffect } from "react";
import { SingleMessageSentResponse } from "coolsms-node-sdk";
import { FETCH_FREE_BOARDS } from "../../components/NoticeBoardComponents/FreeBoardComponents/Table/Table.queries";
import { graphql } from "graphql";
import { graphQLSelector } from "recoil-relay";
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
