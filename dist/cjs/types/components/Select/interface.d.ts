import { ThemeProps } from "../../styles/theme";
export interface ISelect {
    onChange: (value: string) => void;
    value: string;
    options: Array<string>;
    placeholder?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}
export declare const defaultProps: ISelect;
