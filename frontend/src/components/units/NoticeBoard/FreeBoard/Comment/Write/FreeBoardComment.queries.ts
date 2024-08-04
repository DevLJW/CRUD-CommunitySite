import { gql } from "@apollo/client";

export const CREATE_FREE_BOARD_COMMENT = gql`
  mutation CreateFreeBoardComment(
    $createFreeBoardComment: CreateFreeBoardCommentInput!
    $BoardId: Int!
  ) {
    CreateFreeBoardComment(
      createFreeBoardComment: $createFreeBoardComment
      BoardId: $BoardId
    ) {
      number
      writer
      content
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
