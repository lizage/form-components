import { FileObject } from "../FileInput/interface";
import { ThemeProps } from "../../../styles/theme";
export interface IFilesButton {
    addFile: (value: FileObject) => void;
    id?: string;
    theme?: ThemeProps;
    "aria-label"?: string;
}
export declare const defaultProps: IFilesButton;
