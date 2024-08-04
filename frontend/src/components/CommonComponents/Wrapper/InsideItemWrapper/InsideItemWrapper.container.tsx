import { useFormContext } from "react-hook-form";
import { IInsideItemWrapper } from "./InsideItemWrapper.interfaces";
import InsideItemWrapperUI from "./InsideItemWrapper.presenter";

export default function InsideItemWrapper(props: IInsideItemWrapper) {
  return (
    <InsideItemWrapperUI style={props.style}>
      {props.children}
    </InsideItemWrapperUI>
  );
}
