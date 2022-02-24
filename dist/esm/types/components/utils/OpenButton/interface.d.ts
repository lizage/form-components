export interface IOpenButton {
    onClick: () => void;
    isOpen: boolean;
    id?: string;
    'aria-label'?: string;
}
export declare const defaultProps: IOpenButton;
