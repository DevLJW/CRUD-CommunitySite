import { ReactNode } from "react";

export interface IRoutingButtonUI {
  OnClick: () => void;
  children: ReactNode;
  style?: React.CSSProperties;
}

export interface IRoutingButton {
  children: ReactNode;
  style?: React.CSSProperties;
  state?: string;
}
