import { BasicTextWrapper } from "../Styles/Styles";

export default function BasicTextWrapperUI(props: any) {
  return (
    <BasicTextWrapper stylesprops={props.styles}>
      {props.children}
    </BasicTextWrapper>
  );
}
