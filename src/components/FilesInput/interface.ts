import { ThemeProps } from "../../styles/theme";
import { defaultTheme } from "../../styles/theme";

export interface IFilesInput {
  onChange: (value: Array<File>) => void;
  maxFiles: number;
  placeholder?: string;
  singleLabel?: string;
  multipleLabel?: string;
  id?: string;
  maxWidth?: number;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: IFilesInput = {
  onChange: (value) => console.log(value),
  maxFiles: 5,
  theme: defaultTheme,
  "aria-label": "select multiple options",
};
