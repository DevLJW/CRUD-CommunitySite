import { gql } from "@apollo/client";

export const UPDATE_FREE_BOARD = gql`
  mutation UpdateFreeBoard(
    $updateFreeBoardInput: UpdateFreeBoardInput!
    $BoardId: Int!
  ) {
    UpdateFreeBoard(
      updateFreeBoardInput: $updateFreeBoardInput
      BoardId: $BoardId
    ) {
      number
      writer
      title
      content
      password
      FileUrls
      user {
        id
        email
        name
        nickname
        cellphone
      }
    }
  }
`;
