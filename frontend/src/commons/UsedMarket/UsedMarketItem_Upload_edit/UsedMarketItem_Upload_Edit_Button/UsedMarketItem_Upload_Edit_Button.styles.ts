import styled from "@emotion/styled";

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background-color: black;
  color: white;

  background-color: ${(props: any) => (props.isActive ? "yellow" : "none")};
`;
