import styled from "@emotion/styled";

export const BodyStyle = styled.div<{ style?: React.CSSProperties }>`
  width: ${(props) => props.style?.width};
  min-height: ${(props) => props.style?.minHeight};
`;
