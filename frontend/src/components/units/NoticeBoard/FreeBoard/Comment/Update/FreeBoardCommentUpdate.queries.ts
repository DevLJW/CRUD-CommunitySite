import { gql } from "@apollo/client";

export const UPDATE_FREE_BOARD_COMMENT = gql`
  mutation UpdateFreeBoardComment(
    $updateFreeBoardCommentInput: UpdateFreeBoardCommentInput!
    $BoardCommentId: Int!
  ) {
    UpdateFreeBoardComment(
      updateFreeBoardCommentInput: $updateFreeBoardCommentInput
      BoardCommentId: $BoardCommentId
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
      deletedAt
      createdAt
    }
  }
`;
