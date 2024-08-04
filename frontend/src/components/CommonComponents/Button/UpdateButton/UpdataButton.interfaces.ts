import { ReactNode } from "react";

export interface IUpdateButton {
  type: "button" | "reset" | "submit" | undefined;
  children: ReactNode;
}

export interface IUpdateButtonUI {
  type: "button" | "reset" | "submit" | undefined;
  children: ReactNode;
}
