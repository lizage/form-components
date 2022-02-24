import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface INumberInput {
  onChange: (value: number) => void;
  value: number;

  step: number;
  placeholder?: number;
  id?: string;
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: INumberInput = {
  onChange: (value) => console.log(value),
  value: 0,
  step: 1,
  theme: defaultTheme,
  "aria-label": "number input",
};
