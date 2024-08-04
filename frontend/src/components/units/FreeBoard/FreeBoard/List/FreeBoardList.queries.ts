import { gql } from "@apollo/client";

export const CREATE_VIEWS = gql`
  mutation Views($BoardId: Int!) {
    Views(BoardId: $BoardId)
  }
`;
