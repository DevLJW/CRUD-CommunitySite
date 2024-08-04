import { ISliderItemCard } from "./SliderItemCard.interfaces";
import SliderItemUI from "./SliderItemCard.presenter";

export default function SliderItemCard(props: ISliderItemCard) {
  return <SliderItemUI el={props.el}></SliderItemUI>;
}
