import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface ISelectMultiple {
  onChange: (value: Array<string>) => void;
  options: Array<string>;
  chosenOptions: Array<string>;
  placeholder?: string;
  singleLabel?: string;
  multipleLabel?: string;
  id?: string;
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: ISelectMultiple = {
  onChange: (value) => console.log(value),
  options: [],
  chosenOptions: [],
  theme: defaultTheme,
  "aria-label": "select multiple options",
};
