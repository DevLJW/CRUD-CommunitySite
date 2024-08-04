import { ClassNames } from "@emotion/react";
import BottomWrapper from "../../Wrapper/BottomWrapper/BottomWrapper";
import ImageWrapper from "../../Wrapper/ImageWrapper/ImageWrapper";
import { SliderStyle } from "../ImageSlick/ImageSlick.style";
import SliderImage from "../SliderImage/SliderImage";
import SliderItemCard from "./SliderItemCard.container";
import { BMDOHYEON, BMHANNAPro } from "../../../../commons/Font/Font";
import { ISliderItemCardUI } from "./SliderItemCard.interfaces";
import { getMyDate } from "../../../../commons/utils/utils";

import { Typography } from "antd";

const { Title } = Typography;
const { Text } = Typography;
export default function SliderItemCardUI(props: ISliderItemCardUI) {
  return (
    <div
      style={{
        width: "95%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "10px 10px 10px gray",
        borderBottom: "1px dotted gray",
      }}
    >
      <div style={{ width: "100%", height: "65%" }}>
        <SliderImage src="https://images.unsplash.com/photo-1709473015515-0b3a8ab40f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTgxMTA0NA&ixlib=rb-4.0.3&q=80&w=1080"></SliderImage>
      </div>
      <div
        style={{
          width: "100%",
          height: "80%",

          display: "flex",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <Title level={5} style={{ width: "100%" }}>
          {props.el.title}
        </Title>

        <Text
          type="secondary"
          style={{
            width: "100%",
            height: "40px",
            overflow: "hidden",
            display: "-webkit-inline-flex",
            WebkitLineClamp: 2,
            WebkitOrder: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {props.el.content}
        </Text>
      </div>

      <div
        style={{
          width: "100%",
          height: "20%",

          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <Text>{props.el.views ? props.el.views : "0"}</Text>
        <Text>{getMyDate(props.el.createdAt)}</Text>
      </div>
    </div>
  );
}
