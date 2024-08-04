// import { gql } from "@apollo/client";

// export const FETCH_USED_ITEMS = gql`
//   query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
//     fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
//       _id
//       name
//       remarks
//       contents
//       price
//       tags
//       images
//       pickedCount
//       useditemAddress {
//         _id
//         zipcode
//         address
//         addressDetail
//         lat
//         lng
//       }

//       seller {
//         _id
//         email
//         name
//       }
//     }
//   }
// `;

// export const FETCH_BEST_ITEM = gql`
//   query fetchUseditemsOfTheBest {
//     fetchUseditemsOfTheBest {
//       _id
//       name
//       remarks
//       contents
//       price
//       tags
//       images
//       pickedCount
//       useditemAddress {
//         _id
//         zipcode
//         address
//         addressDetail
//         lat
//         lng
//       }

//       seller {
//         _id
//         email
//         name
//       }
//       createdAt
//       updatedAt
//     }
//   }
// `;

// export const FETCH_USED_ITEM = gql`
//   query fetchUseditem($useditemId: ID!) {
//     fetchUseditem(useditemId: $useditemId) {
//       _id
//       name
//       remarks
//       contents
//       price
//       tags
//       images
//       pickedCount
//       createdAt
//       updatedAt
//       useditemAddress {
//         _id
//         zipcode
//         address
//         addressDetail
//         lat
//         lng
//       }

//       seller {
//         _id
//         email
//         name
//       }

//       buyer {
//         _id
//         email
//         name
//       }
//     }
//   }
// `;
