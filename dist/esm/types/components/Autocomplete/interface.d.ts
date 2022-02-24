import { ThemeProps } from "../../styles/theme";
export interface IAutocomplete {
    onChange: (value: string) => void;
    value: string;
    minChars: number;
    options: Array<string>;
    placeholder?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}
export declare const defaultProps: IAutocomplete;
