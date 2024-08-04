import { gql } from "@apollo/client";

export const FETCH_FREE_BOARDS = gql`
  query FetchFreeBoards($page: Int) {
    FetchFreeBoards(page: $page) {
      number
      writer
      title
      content
      password
      FileUrls
      createdAt
      views
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

export const FETCH_FREE_BOARDS_COUNTS = gql`
  query FetchFreeBoardsCounts {
    FetchFreeBoardsCounts
  }
`;
