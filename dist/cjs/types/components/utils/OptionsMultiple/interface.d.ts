import { ThemeProps } from "../../../styles/theme";
export interface IOptionsMultiple {
    chooseOption: (value: string) => void;
    options: Array<string>;
    chosenOptions: Array<string>;
    maxWidth?: number;
    theme?: ThemeProps;
}
export declare const defaultProps: IOptionsMultiple;
