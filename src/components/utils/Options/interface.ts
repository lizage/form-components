import { ThemeProps } from "../../../styles/theme";
import { defaultTheme } from "../../../styles/theme";

export interface IOptions {
  chooseOption: (value: string) => void;
  options: Array<string>;
  maxWidth?: number;
  theme?: ThemeProps;
}

export const defaultProps: IOptions = {
  chooseOption: (value) => console.log(value),
  options: [],
  theme: defaultTheme,
};
