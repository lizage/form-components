import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface IAutocomplete {
  onChange: (value: string) => void;
  value: string;
  minChars: number;
  options: Array<string>;
  placeholder?: string;
  id?: string;
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: IAutocomplete = {
  onChange: (value) => console.log(value),
  value: "",
  options: [],
  minChars: 3,
  theme: defaultTheme,
  "aria-label": "autocomplete input",
};
