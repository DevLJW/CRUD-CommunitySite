import TabsUI from "../../UI/Tabs/Tabs.presenter";

import SliderUI from "../../UI/Slider/Slider.presenter";
import ImageMediaCard from "../../UI/Card/ImageMediaCard.presenter";
import { BasicWrapper } from "../../UI/Styles/Styles";
import ImageMediaCardWrapper from "../../UI/Div/ImageMediaCardWrapper.presenter";
import { BMHANNAPro } from "../../../commons/Font/Font";
import { IMainPageUI } from "./Main.interfaces";

export default function MainPageUI(props: IMainPageUI) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <TabsUI
        value={props.value}
        handleChange={props.handleChange}
        MainCategorydata={props.MainCategorydata}
        SubCategorydata={props.SubCategorydata}
      ></TabsUI> */}

      <SliderUI
        slidersettings={props.slidersettings}
        id={"1"}
        AllBoardData={props.AllBoardData}
      ></SliderUI>

      <div
        style={{
          textAlign: "center",
          marginTop: "150px",
          marginBottom: "100px",
          width: "70%",
        }}
      >
        <div style={{ width: "100%", textAlign: "start" }}>
          <span
            className={BMHANNAPro.className}
            style={{
              color: "black",
              fontSize: "30px",
              width: "100%",
            }}
          >
            전체 게시글
          </span>
        </div>
      </div>

      <ImageMediaCardWrapper
        styles={{
          width: "70%",

          marginTop: "5px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {props.AllBoardData?.FetchFreeBoards.map((el) => {
          return <ImageMediaCard el={el}></ImageMediaCard>;
        })}
      </ImageMediaCardWrapper>
    </div>
  );
}
