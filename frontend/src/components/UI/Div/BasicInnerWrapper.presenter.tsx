import { BasicInnerWrapper } from "../Styles/Styles";

export default function BasicInnerWrapperUI(props: any) {
  return (
    <BasicInnerWrapper stylesprops={props.styles}>
      {props.children}
    </BasicInnerWrapper>
  );
}
