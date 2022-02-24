import { ThemeProps } from "../../../styles/theme";
export interface IOptions {
    chooseOption: (value: string) => void;
    options: Array<string>;
    maxWidth?: number;
    theme?: ThemeProps;
}
export declare const defaultProps: IOptions;
