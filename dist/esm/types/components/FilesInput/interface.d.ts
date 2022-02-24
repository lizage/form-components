import { ThemeProps } from "../../styles/theme";
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
export declare const defaultProps: IFilesInput;
