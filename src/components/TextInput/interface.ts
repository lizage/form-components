import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface ITextInput {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  id?: string;
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: ITextInput = {
  onChange: (value) => console.log(value),
  value: "",
  theme: defaultTheme,
  "aria-label": "single line text input",
};
