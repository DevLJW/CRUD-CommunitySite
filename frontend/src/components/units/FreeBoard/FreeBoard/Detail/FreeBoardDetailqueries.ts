import { gql } from "@apollo/client";

export const FETCH_FREE_BOARD = gql`
  query FetchFreeBoard($number: Int!) {
    FetchFreeBoard(number: $number) {
      number
      writer
      title
      content
      password
      createdAt
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

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      nickname
      name
      cellphone
    }
  }
`;
