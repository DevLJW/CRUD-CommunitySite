import { ISliderImage } from "./SliderImage.interface";
import { SliderImageStyle } from "./SliderImage.style";

export default function SliderImage(props: ISliderImage) {
  return <SliderImageStyle src={props.src}></SliderImageStyle>;
}
