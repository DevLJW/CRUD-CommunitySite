import styled from "@emotion/styled";

export const InfoStyle = styled.div<{ style?: React.CSSProperties }>`
  display: ${(props) => props.style?.display};
  플렉스 다이렉션은 컬럼 저스트 컨텐트는 센터
  flex-direction: ${(props) => props.style?.flexDirection};  
  justify-content: ${(props) => props.style?.justifyContent};
  
`;
