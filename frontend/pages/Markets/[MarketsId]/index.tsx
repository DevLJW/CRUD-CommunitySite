// import CardWrapperUI from "../../../src/components/UI/Div/CardWrapper.presenter";
// import BasicWrapperUI from "../../../src/components/UI/Div/BasicWrapper.presenter";
// import HeaderUI from "../../../src/components/UI/Div/Header.presenter";
// import AvatarWrapperUI from "../../../src/components/UI/Div/AvatarWrapper.presenter";
// import AvatarImgUI from "../../../src/components/UI/Img/AvatarImg.presenter";
// import InfoUI from "../../../src/components/UI/Div/Info.presenter";
// import BasicTextUI from "../../../src/components/UI/Text/BasicText.presenter";

// import SliderUI from "../../../src/components/UI/Slider/Slider.presenter";
// import BodyUI from "../../../src/components/UI/Div/Body.presenter";

// import BasicImageWrapperUI from "../../../src/components/UI/Div/BasicImageWrapper.presenter";
// import BasicImgUI from "../../../src/components/UI/Img/BasicImg.presenter";
// import ButtonUI from "../../../src/components/UI/Button/Button.presenter";
// import ButtonWrapperUI from "../../../src/components/UI/Div/ButtonWrapper.presenter";
// import { useRouter } from "next/router";
// import { UseItemgethooks } from "../../../src/commons/hooks/useitemgethooks";
// import DOMPurify from "dompurify";
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import {
//   KaKaoMapWrapper,
//   slickdotsdiv,
// } from "../../../src/components/UI/Styles/Styles";
// import { Reset } from "styled-reset";

// declare const window: typeof globalThis & {
//   kakao: any;
// };

// export default function MarketsDetailPage() {
//   const [Map, SetMap] = useState({});
//   const router = useRouter();

//   const { data } = UseItemgethooks(router.query.MarketsId);
//   console.log(data);

//   const SubImageGet = (event: any) => {
//     console.log(event);
//   };

//   // function SampleNextArrow(props) {
//   //   const { className, style, onClick } = props;
//   //   return (
//   //     <div
//   //       className={className}
//   //       style={{ ...style, display: "block", background: "red" }}
//   //       onClick={onClick}
//   //     ></div>
//   //   );
//   // }

//   function SamplePrevArrow(props: any) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           background: "gray",
//         }}
//         onClick={onClick}
//       ></div>
//     );
//   }

//   const Slidersettings = {
//     customPaging: function (i: any) {
//       return (
//         <div
//           style={{ marginLeft: "20px", marginRight: "20px", marginTop: "10px" }}
//         >
//           <img
//             style={{ width: "100px" }}
//             src={`https://storage.googleapis.com/${data?.fetchUseditem?.images?.[i]}`}
//           ></img>
//         </div>
//       );
//     },

//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // nextArrow: <SampleNextArrow></SampleNextArrow>,
//     prevArrow: <SamplePrevArrow></SamplePrevArrow>,
//     dotsClass: "",
//   };

//   useEffect(() => {
//     const container = document.getElementById("map"); //    지도를 담을 영역의 DOM 레퍼런스
//     // SetKaKaoMap(container);

//     const options = {
//       //    지도를 생성할 때 필요한 기본 옵션
//       center: new window.kakao.maps.LatLng(
//         data?.fetchUseditem?.useditemAddress?.lat,
//         data?.fetchUseditem?.useditemAddress?.lng
//       ), //    지도의 중심좌표.
//       level: 1, // 지도의 레벨(확대, 축소 정도)
//     };
//     //글로벌 스테이트로 뺴보기

//     SetMap(new window.kakao.maps.Map(container, options)); //  지도 생성 및 객체 리턴(컨테이너 디자인안에 옵션넣는다생각)
//   }, [data]);

//   const OnClickUsedItemList = () => {
//     router.push(`/UsedMarket`);
//   };

//   const OnClickUsedItemUpadtePage = () => {
//     router.push(`/Markets/${String(router.query.MarketsId)}/edit`);
//   };

//   return (
//     <>
//       <Head>
//         <script
//           type="text/javascript"
//           src="//dapi.kakao.com/v2/maps/sdk.js?appkey=effc3eae32c3943b497f75d115db9c59&libraries=services"
//         ></script>
//       </Head>
//       <BasicWrapperUI width={"80%"} margin={"100px"}>
//         <CardWrapperUI>
//           <HeaderUI styles={""}>
//             <AvatarWrapperUI>
//               <AvatarImgUI></AvatarImgUI>
//               <InfoUI>
//                 <BasicTextUI styles={""}>
//                   {data?.fetchUseditem?.seller?.name}
//                 </BasicTextUI>
//                 <BasicTextUI styles={""}>
//                   {data?.fetchUseditem?.createdAt}
//                 </BasicTextUI>
//               </InfoUI>
//             </AvatarWrapperUI>
//           </HeaderUI>
//           <BodyUI
//             styles={{
//               Minheight: "800px",
//               displayflex: "flex",
//               flexdirection: "column",
//               justifycontent: "center",
//               alignitems: "center",
//             }}
//           >
//             <SliderUI
//               Slidersettings={Slidersettings}
//               SliderImageData={data}
//             ></SliderUI>
//           </BodyUI>
//           {process.browser ? (
//             <div
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(
//                   String(data?.fetchUseditem?.contents)
//                 ),
//               }}
//               style={{
//                 width: "100%",
//                 height: "100px",
//                 marginTop: "50px",
//               }}
//             ></div>
//           ) : (
//             <div
//               style={{ width: "100%", height: "100%", marginTop: "50px" }}
//             ></div>
//           )}

//           <HeaderUI styles={{ margintop: "50px", height: "50px" }}>
//             <AvatarWrapperUI>
//               <InfoUI>
//                 <BasicTextUI styles={""}>
//                   {`#${data?.fetchUseditem?.tags}`}
//                 </BasicTextUI>
//               </InfoUI>
//             </AvatarWrapperUI>
//           </HeaderUI>

//           <BasicImageWrapperUI
//             styles={{
//               width: "600px",
//               height: "360px",
//               margintop: "100px",
//               marginbottom: "100px",
//             }}
//           >
//             <KaKaoMapWrapper id="map"></KaKaoMapWrapper>
//           </BasicImageWrapperUI>

//           <HeaderUI styles={{ height: "50px" }}>
//             <AvatarWrapperUI>
//               <InfoUI></InfoUI>
//             </AvatarWrapperUI>
//           </HeaderUI>

//           <ButtonWrapperUI
//             styles={{
//               width: "100%",
//               height: "200px",
//               displayflex: "flex",
//               justifycontent: "center",
//               alignitems: "center",
//             }}
//           >
//             <ButtonUI OnClickMethod={OnClickUsedItemList}>목록으로</ButtonUI>
//             <ButtonUI OnClickMethod={OnClickUsedItemUpadtePage}>
//               수정하기
//             </ButtonUI>
//           </ButtonWrapperUI>
//         </CardWrapperUI>
//       </BasicWrapperUI>
//     </>
//   );
// }
