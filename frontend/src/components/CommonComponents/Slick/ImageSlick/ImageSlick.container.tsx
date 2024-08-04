import { IImageSlick } from "./ImageSlick.interface";
import ImageSlickUI from "./ImageSlick.presenter";

export default function ImageSlick(props: IImageSlick) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ImageSlickUI settings={settings} FileUrl={props.FileUrl}></ImageSlickUI>
  );
}
