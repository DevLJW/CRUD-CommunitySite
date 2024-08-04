import styled from "@emotion/styled";
import Slider from "react-slick";

export const SliderStyle = styled(Slider)`
  //슬라이더 전체영역
  width: 100%;
  height: 700px;
  margin: 0 auto;

  //슬라이더 리스트 영역
  .slick-list {
    width: 50%;
    height: 100%;
    margin: 0 auto;
  }

  //슬라이더 컨텐츠 감싸는 영역(안에 내용물)
  .slick-list div {
    cursor: pointer;

    width: 100%;
    height: 100%;
  }

  //   .slick-dots {
  //     //슬라이드의 위치
  //     bottom: 20px;
  //     margin-top: 200px;
  //   }
`;

export const SliderStyle2 = styled(Slider)`
  //슬라이더 전체영역
  width: 70%;
  height: 500px;
  margin: 0 auto;
 

  //슬라이더 리스트 영역
  .slick-list {
    width:100%
    height: 100%;
    margin-top: 30px;
   
  
  }

  //슬라이더 컨텐츠 감싸는 영역(안에 내용물)
  .slick-list div {
  

    width: 100%;
    height: 100%;
  }

// .slick-dots {
      
//        bottom: 20px;
//        margin-top: 300px;
//      }
// `;
