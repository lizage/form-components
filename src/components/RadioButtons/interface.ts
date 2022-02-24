import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface IRadio {
  onChange: (value: string) => void;
  options: Array<string>;
  currentOption: string;
  name?: string;
  isVertical?: boolean;
  id?: string;
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
  "aria-checked"?: string;
}

export const defaultProps: IRadio = {
  onChange: (value) => console.log(value),
  options: [],
  currentOption: "",
  name: "",
  theme: defaultTheme,
  "aria-label": "radio buttons",
};
