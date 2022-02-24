import { ThemeProps } from "../../styles/theme";
export interface ITextInput {
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}
export declare const defaultProps: ITextInput;
