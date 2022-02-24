import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface ICheckbox {
  onChange: (value: boolean) => void;
  value: boolean;
  labelText: string;
  id?: string;
  theme?: ThemeProps;
  "aria-label"?: string;
  "aria-checked"?: boolean;
}

export const defaultProps: ICheckbox = {
  onChange: (value) => console.log(value),
  value: false,
  labelText: "",
  theme: defaultTheme,
  "aria-label": "checkbox",
  "aria-checked": false,
};
