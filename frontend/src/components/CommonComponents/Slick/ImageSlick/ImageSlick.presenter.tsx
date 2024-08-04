import Slider from "react-slick";
import { IImageSlickUI } from "./ImageSlick.interface";
import SliderImage from "../SliderImage/SliderImage";
import { SliderStyle } from "./ImageSlick.style";

export default function ImageSlickUI(props: IImageSlickUI) {
  return (
    <SliderStyle {...props.settings}>
      {props.FileUrl?.filter((el: string) => el !== "") //  filter: 값이 빈값(false)를 확인 true값만 .map으로 실행
        .map((el: string) => (
          <SliderImage
            src={`https://storage.googleapis.com/${el}`}
          ></SliderImage>
        ))}
    </SliderStyle>
  );
}
