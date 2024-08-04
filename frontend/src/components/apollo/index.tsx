import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "../../../styles/globalstyle";

const GLOBAL_STATE = new InMemoryCache(); //  InMemoryCache() 아폴로 전역캐시를 저장해놓는곳
//  페이지 이동시 app.tsx부터 리렌더링되어 지역변수가 아닌 전역으로 빼준다.

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSettingProps(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const result = localStorage.getItem("accessToken");
      if (result) setAccessToken(result);
    }
  }, []);

  const uploadLink = createUploadLink({
    //  이미지 업로드 API를 통해서 스토리지에 이미지를 전달하기 위해 설정하는 세팅형식(보내는곳)
    uri: "http://localhost:4000/graphql",
    headers: {
      "Apollo-Require-Preflight": "true", //csrf 허용
    },
  });

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  ////

  const pluslink = ApolloLink.split(
    (operation) => operation.getContext().hasUpload,
    uploadLink,
    httpLink
  );
  ///
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    link: pluslink,

    cache: GLOBAL_STATE,
  });

  //    prettier-ignore

  return <ApolloProvider client={client}>
      <Global styles={globalStyles}></Global>
    {props.children}

  </ApolloProvider>;
}
