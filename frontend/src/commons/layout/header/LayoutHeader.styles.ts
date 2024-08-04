import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const InnerWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #5729ff;
  cursor: pointer;
  margin-left: 40px;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
`;
