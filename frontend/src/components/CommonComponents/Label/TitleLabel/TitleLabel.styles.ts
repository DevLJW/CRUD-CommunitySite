import styled from "@emotion/styled";
import { ILabel } from "./TitleLabel.interfaces";

export const Label = styled.div<{ style?: React.CSSProperties }>`
  font-weight: ${(props: ILabel) => props.style?.fontWeight};
  margin-left: ${(props: ILabel) => props.style?.marginLeft};
  margin-bottom: ${(props: ILabel) => props.style?.marginBottom};
  font-size: ${(props: ILabel) => props.style?.fontSize};
  width: ${(props: ILabel) => props.style?.width};
`;
