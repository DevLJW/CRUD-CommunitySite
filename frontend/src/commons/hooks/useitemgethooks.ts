// import { useQuery } from "@apollo/client";
// import { IQuery, IQueryFetchUseditemArgs } from "../types/generated/types";
// import { FETCH_USED_ITEM } from "../../components/units/UsedMarket/list/UsedMarketList.queries";

// export function UseItemgethooks(UseItemId: any) {
//   const { data } = useQuery<
//     Pick<IQuery, "fetchUseditem">,
//     IQueryFetchUseditemArgs
//   >(FETCH_USED_ITEM, {
//     variables: { useditemId: UseItemId }, // 현재 상세 게시글 아이디
//   });

//   return { data };
// }
