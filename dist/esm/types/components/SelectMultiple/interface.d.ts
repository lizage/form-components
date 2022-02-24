import { ThemeProps } from "../../styles/theme";
export interface ISelectMultiple {
    onChange: (value: Array<string>) => void;
    options: Array<string>;
    chosenOptions: Array<string>;
    placeholder?: string;
    singleLabel?: string;
    multipleLabel?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}
export declare const defaultProps: ISelectMultiple;
