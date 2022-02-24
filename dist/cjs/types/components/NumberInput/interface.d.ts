import { ThemeProps } from "../../styles/theme";
export interface INumberInput {
    onChange: (value: number) => void;
    value: number;
    step: number;
    placeholder?: number;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}
export declare const defaultProps: INumberInput;
