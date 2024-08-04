import styled from "@emotion/styled";

export const ImageWrapperStyle = styled.div<{ style?: React.CSSProperties }>`
  width: ${(props) => props.style?.width};
  padding-top: ${(props) => props.style?.paddingTop};
  margin-left: ${(props) => props.style?.marginLeft};
  display: ${(props) => props.style?.display};
  flex-direction: ${(props) => props.style?.flexDirection};
`;
