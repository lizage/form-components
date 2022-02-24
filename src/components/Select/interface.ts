import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface ISelect {
  onChange: (value: string) => void;
  value: string;
  options: Array<string>;
  placeholder?: string;
  id?: string;
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: ISelect = {
  onChange: (value) => console.log(value),
  value: "",
  options: [],
  theme: defaultTheme,
  "aria-label": "select input",
};
