import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      name
      nickname
      cellphone
    }
  }
`;

export const CREATE_FREE_BOARD = gql`
  mutation CreateFreeBoard($createFreeBoardInput: CreateFreeBoardInput!) {
    CreateFreeBoard(createFreeBoardInput: $createFreeBoardInput) {
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
