import { useQuery } from "@apollo/client";
import NextArrow from "../../UI/Slider/SliderArrow/NextArrow";
import PrevArrow from "../../UI/Slider/SliderArrow/PrevArrow";
import MainPageUI from "./Main.presenter";
import React, { useState } from "react";
import {
  FETCH_FREE_BOARDS,
  FETCH_PRODUCT_CATEGORY,
  FETCH_PRODUCT_SUB_CATEGORY,
} from "./Main.queries";
import { IQuery } from "../../../commons/types/generated/types";

export default function MainPage() {
  const { data: MainCategory } = useQuery(FETCH_PRODUCT_CATEGORY);
  const { data: SubCategory } = useQuery(FETCH_PRODUCT_SUB_CATEGORY);

  const { data: AllBoardData } =
    useQuery<Pick<IQuery, "FetchFreeBoards">>(FETCH_FREE_BOARDS);

  const [value, setValue] = useState("남성의류");
  console.log("모든보드");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
  };

  return (
    <MainPageUI
      value={value}
      handleChange={handleChange}
      slidersettings={settings}
      id={"1"}
      MainCategorydata={MainCategory}
      SubCategorydata={SubCategory}
      AllBoardData={AllBoardData}
    ></MainPageUI>
  );
}
