/// <reference types="react" />
import { ThemeProps } from "../../styles/theme";
export interface IButton {
    onClick: () => void;
    children: React.ReactNode;
    id?: string;
    use?: "primary" | "secondary";
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}
export declare const defaultProps: IButton;
