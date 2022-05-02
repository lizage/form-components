import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface ISubmitButton {
  onClick?: () => void;
  value: string;
  id?: string;
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: ISubmitButton = {
  onClick: () => null,
  value: "",
  theme: defaultTheme,
  "aria-label": "form submit button",
};
