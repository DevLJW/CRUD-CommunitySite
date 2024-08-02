export interface IUsersServiceCreate {
  email: string;
  password: string;
  name: string;
  nickname: string;
  cellphone: string;
}

export interface IUsersServiceFindOneByEmail {
  email: string;
}

export interface IUsersServiceFindOneByNickName {
  nickname: string;
}

export interface IAuthServiceLoginReturn {
  message: string;
  setRefreshToken: string;
  access_token: string;
}

export interface IAuthServiceFetchUser {
  id: string;
}

export interface ISMSSendMessage {
  phonenumber: string;
}

export interface MessageType {
  type:
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
    | "NSA";
}
