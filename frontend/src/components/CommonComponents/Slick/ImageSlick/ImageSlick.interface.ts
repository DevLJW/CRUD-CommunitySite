import { Maybe } from "yup";

export interface IImageSlickUI {
  settings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
  };
  FileUrl: Maybe<string[]>;
}

export interface IImageSlick {
  FileUrl: Maybe<string[]> | undefined;
}
