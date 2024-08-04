import { BasicWrapper } from "../Styles/Styles";

export default function BasicWrapperUI(props: any) {
  return (
    <BasicWrapper
      width={props.width}
      color={props.color}
      Sort={props.Sort}
      displayflex={props.displayflex}
      spacebetween={props.spacebetween}
      aligncenter={props.aligncenter}
      margin={props.margin}
      padding={props.padding}
      margintop={props.margintop}
    >
      {props.children}
    </BasicWrapper>
  );
}
