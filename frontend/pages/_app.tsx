import "../styles/globals.css";
import "../src/components/UI/slick/slick.css";
import "../src/components/UI/slick/slick-theme.css";

import type { AppProps } from "next/app";
import ApolloSettingProps from "../src/components/apollo";
import Layout from "../src/commons/layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  //컴포넌트와 페이지프롭스이해
  return (
    //  내부 컴포넌트 리코일 모두사용
    <RecoilRoot>
      <ApolloSettingProps>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSettingProps>
    </RecoilRoot>
  );
}
