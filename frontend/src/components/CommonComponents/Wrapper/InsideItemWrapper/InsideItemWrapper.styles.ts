import styled from "@emotion/styled";
import { IInsideItemWrapper } from "./InsideItemWrapper.interfaces";

export const InsideItemWrapper = styled.div<{ style?: React.CSSProperties }>`
  width: ${(props: IInsideItemWrapper) => props.style?.width};
  display: ${(props: IInsideItemWrapper) => props.style?.display};
  flex-direction: ${(props: IInsideItemWrapper) => props.style?.flexDirection};
  justify-content: ${(props: IInsideItemWrapper) =>
    props.style?.justifyContent};
  border: ${(props: IInsideItemWrapper) => props.style?.border};
`;
