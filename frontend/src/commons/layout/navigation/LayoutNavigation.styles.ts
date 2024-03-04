import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  color: black;
  border: 1px solid gray;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: orange;
  }
`;
