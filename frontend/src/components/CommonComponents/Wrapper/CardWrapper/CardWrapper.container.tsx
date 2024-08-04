import CardWrapperUI from "./CardWrapper.presenter";

export default function CardWrapper(props: any) {
  return <CardWrapperUI>{props.children}</CardWrapperUI>;
}
