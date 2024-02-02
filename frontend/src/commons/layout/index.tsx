import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
const HIDDEN = ["/"];

export interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN.includes(router.asPath);
  console.log(router.asPath);

  return (
    <>
      {/* false일때만 보여줘{!isHiddenHeader && <LayoutHeader></LayoutHeader>} */}

      <LayoutHeader></LayoutHeader>

      {isHiddenHeader && <LayoutBanner></LayoutBanner>}

      <Body>{props.children}</Body>
    </>
  );
}
