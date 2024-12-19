import { JSX } from "react";

export type Option = {
  id: number;
  name: string;
  icon: JSX.Element;
  selectedIcon: JSX.Element;
  componentRender: JSX.Element;
};

export type OptionsProps = {
  optionsDetails: Option[];
};
