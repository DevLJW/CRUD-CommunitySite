import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMainPageUI {
  value: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
  slidersettings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    nextArrow: EmotionJSX.Element;
    prevArrow: EmotionJSX.Element;
  };
  id: string;
  MainCategorydata: any;
  SubCategorydata: any;
  AllBoardData: Pick<IQuery, "FetchFreeBoards"> | undefined;
}
