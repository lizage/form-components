import { ThemeProps } from "../../styles/theme";
export interface ISubmitButton {
    onClick: () => void;
    value: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}
export declare const defaultProps: ISubmitButton;
