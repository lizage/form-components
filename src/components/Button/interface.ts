import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface IButton {
  onClick: () => void;
  children: React.ReactNode;
  id?: string;
  use?: "primary" | "secondary";
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: IButton = {
  onClick: () => null,
  children: null,
  theme: defaultTheme,
  "aria-label": "clickable button",
};
