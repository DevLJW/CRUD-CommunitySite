import { gql } from "@apollo/client";

export const FETCH_PRODUCT_CATEGORY = gql`
  query {
    fetchProductCategory {
      id
      name
    }
  }
`;

export const FETCH_PRODUCT_SUB_CATEGORY = gql`
  query {
    fetchProductSubCategory {
      id
      name
      productCategory {
        id
        name
      }
    }
  }
`;

export const FETCH_FREE_BOARDS = gql`
  query FetchFreeBoards {
    FetchFreeBoards {
      number
      writer
      title
      content
      views
      user {
        id
        email
        name
        nickname
        cellphone
      }

      createdAt
    }
  }
`;
