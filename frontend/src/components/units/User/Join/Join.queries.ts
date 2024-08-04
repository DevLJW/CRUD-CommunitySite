import { gql } from "@apollo/client";

export const JOIN_USER = gql`
  mutation createUser(
    $email: String!
    $name: String!
    $nickname: String!
    $password: String!
    $cellphone: String!
  ) {
    createUser(
      email: $email
      name: $name
      nickname: $nickname
      password: $password
      cellphone: $cellphone
    ) {
      email
      name
      nickname
    }
  }
`;

export const EMAIL_VALIDATE_CHECK = gql`
  query EmailValidateCheck($email: String!) {
    EmailValidateCheck(email: $email) {
      message
    }
  }
`;

export const NICKNAME_VALIDATE_CHECK = gql`
  query NickNameValidateCheck($nickname: String!) {
    NickNameValidateCheck(nickname: $nickname) {
      message
    }
  }
`;
