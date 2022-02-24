import { FileObject } from "../FileInput/interface";
import { ThemeProps } from "../../../styles/theme";
import { defaultTheme } from "../../../styles/theme";

export interface IFilesButton {
  addFile: (value: FileObject) => void;
  id?: string;
  theme?: ThemeProps;
  "aria-label"?: string;
}

export const defaultProps: IFilesButton = {
  addFile: () => null,
  theme: defaultTheme,
  "aria-label": "file button",
};
