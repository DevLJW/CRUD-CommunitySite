// import BasicImageWrapperUI from "../../../UI/Div/BasicImageWrapper.presenter";
// import BasicImageWriteDetailInnerWrapperUI from "../../../UI/Div/BasicImageWriteDetailInnerWrapper.presenter";
// import BasicImageWriteDetailWrapperUI from "../../../UI/Div/BasicImageWriteDetailWrapper.presenter";
// import BasicInnerWrapperUI from "../../../UI/Div/BasicInnerWrapper.presenter";
// import BasicItemWrapperUI from "../../../UI/Div/BasicItemWrapper.presenter";
// import BasicTextWrapperUI from "../../../UI/Div/BasicTextWrapper.presenter";
// import BasicWrapperUI from "../../../UI/Div/BasicWrapper.presenter";
// import BasicImgUI from "../../../UI/Img/BasicImg.presenter";

// import BasicTextUI from "../../../UI/Text/BasicText.presenter";

// import { IUsedMarketListUI } from "./UsedMarketList.types";
// import InfiniteScroll from "react-infinite-scroller";
// import { useRouter } from "next/router";
// import { Usebestitemhooks } from "../../../../commons/hooks/usebestitemhooks";
// import { UseItemsgethooks } from "../../../../commons/hooks/useItemsgethooks";
// import Link from "next/link";

// export default function UsedMarketListUI() {
//   const router = useRouter();

//   const { BestItem } = Usebestitemhooks();
//   const { data, onLoadM, setItemBoolean } = UseItemsgethooks();

//   const SellingItem = () => {
//     setItemBoolean(false);
//   };

//   const SoldOutItem = () => {
//     setItemBoolean(true);
//   };

//   const onClickBoardDetail = (event: any) => {
//     location.href = `Markets/${event.target.id}`;
//     // router.push(`Markets/${event.target.id}`);
//     event.stopPropagation();
//   };

//   return (
//     <>
//       <br></br>
//       <br></br>
//       <BasicWrapperUI
//         width={"1200px"}
//         color={"red"}
//         Sort={"column"}
//         displayflex={"flex"}
//       >
//         <BasicTextUI
//           styles={{
//             width: "100%",
//             textalign: "center",
//             color: "Black",
//             Weight: "700",
//             FontSize: "36px",
//           }}
//         >
//           베스트 상품
//         </BasicTextUI>
//         <BasicInnerWrapperUI
//           styles={{ width: "100%", height: "300px", displayflex: "flex" }} //네모칸 4개
//         >
//           {BestItem?.fetchUseditemsOfTheBest.map((el) => (
//             <BasicItemWrapperUI
//               styles={{ width: "100%", displayflex: "flex", Sort: "column" }} //네모칸하나 테두리
//             >
//               <BasicImageWrapperUI styles={{ width: "100%", height: "70%" }}>
//                 <BasicImgUI
//                   styles={{ width: "100%", height: "100%" }}
//                   truedata={el?.images?.[0] ? el.images[0] : ""}
//                 ></BasicImgUI>
//               </BasicImageWrapperUI>

//               <BasicImageWriteDetailWrapperUI
//                 styles={{ width: "100%", height: "30%", displayflex: "flex" }}
//               >
//                 <BasicImageWriteDetailInnerWrapperUI
//                   styles={{ width: "70%", displayflex: "flex", Sort: "column" }}
//                 >
//                   <BasicTextUI
//                     styles={""}
//                     OnClickFunction={onClickBoardDetail}
//                     id={el._id}
//                   >
//                     {el.name}
//                   </BasicTextUI>
//                   <BasicTextUI styles={""} id={el._id}>
//                     {el.remarks}
//                   </BasicTextUI>
//                   <BasicTextUI styles={""} id={el._id}>
//                     {el.price}
//                   </BasicTextUI>
//                 </BasicImageWriteDetailInnerWrapperUI>
//                 <BasicImageWriteDetailInnerWrapperUI
//                   styles={{
//                     width: "30%",
//                     displayflex: "flex",
//                     Sort: "column",
//                     justifycontent: "flex-end",
//                   }}
//                 >
//                   <span>Icon</span>
//                   <span>{el.pickedCount}</span>
//                 </BasicImageWriteDetailInnerWrapperUI>
//               </BasicImageWriteDetailWrapperUI>
//             </BasicItemWrapperUI>
//           ))}
//         </BasicInnerWrapperUI>
//       </BasicWrapperUI>
//       <br></br>
//       <br></br>
//       <BasicWrapperUI
//         width={"1200px"}
//         color={"red"}
//         Sort={"column"}
//         displayflex={"flex"}
//       >
//         <BasicInnerWrapperUI styles={{ width: "100%", displayflex: "flex" }}>
//           <BasicInnerWrapperUI styles={{ width: "50%", displayflex: "flex" }}>
//             <BasicTextUI
//               styles={{
//                 textalign: "start",
//                 color: "Black",
//                 Weight: "700",
//                 FontSize: "20px",
//               }}
//               OnClickFunction={SellingItem}
//             >
//               판매중인상품
//             </BasicTextUI>
//             <BasicTextUI
//               styles={{
//                 textalign: "start",
//                 color: "Black",
//                 Weight: "700",
//                 FontSize: "20px",
//                 marginleft: "10px",
//               }}
//               OnClickFunction={SoldOutItem}
//             >
//               판매된상품
//             </BasicTextUI>
//           </BasicInnerWrapperUI>
//           <BasicInnerWrapperUI styles={{ width: "50%", displayflex: "flex" }}>
//             <BasicTextUI
//               styles={{
//                 width: "100%",
//                 textalign: "start",
//                 color: "Black",
//                 Weight: "700",
//                 FontSize: "20px",
//               }}
//             >
//               키워드검색
//             </BasicTextUI>
//             <BasicTextUI
//               styles={{
//                 width: "100%",

//                 color: "Black",
//                 Weight: "700",
//                 FontSize: "20px",
//                 marginright: "0px",
//               }}
//             >
//               캘린더 작성하는 곳
//             </BasicTextUI>
//             <BasicTextUI
//               styles={{
//                 width: "100%",
//                 textalign: "end",
//                 color: "Black",
//                 Weight: "700",
//                 FontSize: "20px",
//               }}
//             >
//               검색버튼
//             </BasicTextUI>
//           </BasicInnerWrapperUI>
//         </BasicInnerWrapperUI>
//         <InfiniteScroll
//           pageStart={0}
//           loadMore={onLoadM}
//           hasMore={true}
//         ></InfiniteScroll>
//         {data?.fetchUseditems.map((el) => (
//           <BasicWrapperUI width={"100%"} color={"blue"} displayflex={"flex"}>
//             <BasicInnerWrapperUI
//               styles={{ width: "40%", height: "150px", displayflex: "flex" }}
//             >
//               <BasicImageWrapperUI styles={{ width: "50%", height: "100%" }}>
//                 <BasicImgUI
//                   styles={{ width: "100%", height: "100%" }}
//                   truedata={el?.images?.[0] ? el.images[0] : ""}
//                 ></BasicImgUI>
//               </BasicImageWrapperUI>
//               <BasicImageWriteDetailWrapperUI
//                 styles={{
//                   width: "60%",
//                   height: "100%",
//                   displayflex: "flex",
//                   Sort: "column",
//                 }}
//               >
//                 <BasicTextWrapperUI
//                   styles={{
//                     width: "100%",
//                     height: "100%",
//                     flexdirecton: "column",
//                     displayflex: "flex",
//                     end: "space-evenly",
//                     padding: "10px",
//                   }}
//                 >
//                   <BasicTextUI
//                     styles={{
//                       overflowhidden: "hidden",
//                     }}
//                     key={el._id}
//                     OnClickFunction={onClickBoardDetail}
//                     id={el._id}
//                   >
//                     {el.name}
//                   </BasicTextUI>
//                   <BasicTextUI styles={""}>{el.remarks}</BasicTextUI>

//                   <BasicTextWrapperUI
//                     styles={{
//                       width: "100%",
//                       displayflex: "flex",
//                     }}
//                   >
//                     {el.tags?.map((el) => (
//                       <BasicTextUI styles={""}>{`#${el}`}</BasicTextUI>
//                     ))}
//                   </BasicTextWrapperUI>

//                   <BasicTextWrapperUI
//                     styles={{
//                       width: "100%",
//                       displayflex: "flex",
//                     }}
//                   >
//                     <BasicTextUI styles={""}>아이콘</BasicTextUI>
//                     <BasicTextUI styles={""}>{el.seller?.name}</BasicTextUI>
//                     <BasicTextUI styles={""}>좋아요아이콘</BasicTextUI>
//                     <BasicTextUI styles={""}>{el.pickedCount}</BasicTextUI>
//                   </BasicTextWrapperUI>
//                 </BasicTextWrapperUI>
//               </BasicImageWriteDetailWrapperUI>
//             </BasicInnerWrapperUI>
//             <BasicTextWrapperUI
//               styles={{
//                 width: "60%",
//                 height: "150px",
//                 displayflex: "flex",
//                 end: "flex-end",
//                 center: "center",
//               }}
//             >
//               <BasicTextUI styles={""}>{el?.price}</BasicTextUI>
//             </BasicTextWrapperUI>
//           </BasicWrapperUI>
//         ))}
//       </BasicWrapperUI>
//       {/* a는 MAP 방식이라 Link(SPA) 방식으로 바꾸기 */}
//       <a href="/UsedMarket/ItemUploadPage">상품등록하기</a>;
//     </>
//   );
// }
