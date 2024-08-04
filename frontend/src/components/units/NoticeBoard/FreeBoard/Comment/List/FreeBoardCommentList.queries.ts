import { gql } from "@apollo/client";

export const FETCH_FREE_BOARD_COMMENTS = gql`
  query FetchFreeBoardsComments($BoardId: Int, $page: Int) {
    FetchFreeBoardsComments(BoardId: $BoardId, page: $page) {
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

export const FREE_BOARD_COMMENTS_DELETE = gql`
  mutation FreeBoardCommentDelete($BoardCommentId: Int!) {
    FreeBoardCommentDelete(BoardCommentId: $BoardCommentId)
  }
`;
