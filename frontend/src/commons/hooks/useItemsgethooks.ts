// import { useQuery } from "@apollo/client";
// import { IQuery, IQueryFetchUseditemsArgs } from "../types/generated/types";
// import { FETCH_USED_ITEMS } from "../../components/units/UsedMarket/list/UsedMarketList.queries";
// import { useState } from "react";

// export function UseItemsgethooks() {
//   const [ItemBoolean, setItemBoolean] = useState(false);
//   const { data, fetchMore } = useQuery<
//     Pick<IQuery, "fetchUseditems">,
//     IQueryFetchUseditemsArgs
//   >(FETCH_USED_ITEMS, {
//     variables: { isSoldout: ItemBoolean }, // 현재 상세 게시글 아이디
//   });

//   const onLoadM = () => {
//     if (!data) return;
//     fetchMore({
//       variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 }, // 그 다음다음 으로 넘어감 + 1씩
//       updateQuery: (prev, { fetchMoreResult }) => {
//         if (!fetchMoreResult.fetchUseditems)
//           return { fetchUseditems: [...prev.fetchUseditems] };
//         return {
//           fetchUseditems: [
//             ...prev.fetchUseditems,
//             ...fetchMoreResult.fetchUseditems,
//           ],
//         };
//       },
//     });
//   };

//   return { data, onLoadM, setItemBoolean };
// }
