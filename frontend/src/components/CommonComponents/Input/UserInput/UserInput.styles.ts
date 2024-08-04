import styled from "@emotion/styled";
import { IUserInputStyleInterface } from "./UserInput.interfaces";

export const InputStyle = styled.input<{ style?: React.CSSProperties }>`
  width: ${(props: IUserInputStyleInterface) => props.style?.width};
  height: ${(props: IUserInputStyleInterface) => props.style?.height};
  padding-left: ${(props: IUserInputStyleInterface) =>
    props.style?.paddingLeft};
  border: ${(props: IUserInputStyleInterface) => props.style?.border};
`;
