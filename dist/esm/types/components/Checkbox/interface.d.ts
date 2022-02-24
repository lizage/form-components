import { ThemeProps } from "../../styles/theme";
export interface ICheckbox {
    onChange: (value: boolean) => void;
    value: boolean;
    labelText: string;
    id?: string;
    theme?: ThemeProps;
    "aria-label"?: string;
    "aria-checked"?: boolean;
}
export declare const defaultProps: ICheckbox;
