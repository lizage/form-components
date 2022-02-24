import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface ISearchInput {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  id?: string;
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: ISearchInput = {
  onChange: (value) => console.log(value),
  value: "",
  theme: defaultTheme,
  "aria-label": "single line search input",
};
