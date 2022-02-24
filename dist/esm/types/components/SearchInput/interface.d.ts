import { ThemeProps } from "../../styles/theme";
export interface ISearchInput {
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}
export declare const defaultProps: ISearchInput;
