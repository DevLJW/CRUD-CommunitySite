import { useState } from "react";
import { SliderItem, SliderWrapper, slickdotsdiv } from "../Styles/Styles";
import Slider from "react-slick";
import SliderItemCard from "../../CommonComponents/Slick/SliderItemCard/SliderItemCard.container";
import { ISliderUI } from "./Slider.interfaces";
import {
  SliderStyle,
  SliderStyle2,
} from "../../CommonComponents/Slick/ImageSlick/ImageSlick.style";
import { BMHANNAPro } from "../../../commons/Font/Font";

export default function SliderUI(props: ISliderUI) {
  // if (props.id === "2") {
  //   return (
  //     <>
  //       <SliderWrapper>
  //         <Slider {...props.Slidersettings}>
  //           {props?.SliderImageData?.fetchUseditem?.images
  //             ?.filter((el: any) => el !== "")
  //             .map((el: any) => (
  //               <div>
  //                 <SliderItem
  //                   id={el}
  //                   src={`https://storage.googleapis.com/${el}`}
  //                 ></SliderItem>
  //               </div>
  //             ))}
  //         </Slider>
  //       </SliderWrapper>
  //     </>
  //   );
  // }

  if (props.id === "1") {
    return (
      <>
        <div
          style={{
            width: "70%",
            marginTop: "150px",
            marginBottom: "50px",
          }}
        >
          <span
            className={BMHANNAPro.className}
            style={{
              color: "black",
              fontSize: "30px",
              textAlign: "center",
              width: "100%",
            }}
          >
            오늘의 게시글
          </span>
        </div>
        <SliderStyle2 {...props.slidersettings}>
          {props.AllBoardData?.FetchFreeBoards.map((el) => {
            return <SliderItemCard el={el}></SliderItemCard>;
          })}
        </SliderStyle2>
      </>
    );
  } else {
    return null;
  }
}
