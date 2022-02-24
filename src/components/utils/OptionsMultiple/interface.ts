import { ThemeProps } from "../../../styles/theme";
import { defaultTheme } from "../../../styles/theme";

export interface IOptionsMultiple {
  chooseOption: (value: string) => void;
  options: Array<string>;
  chosenOptions: Array<string>;
  maxWidth?: number;
  theme?: ThemeProps;
}

export const defaultProps: IOptionsMultiple = {
  chooseOption: (value) => console.log(value),
  options: [],
  chosenOptions: [],
  theme: defaultTheme,
};
