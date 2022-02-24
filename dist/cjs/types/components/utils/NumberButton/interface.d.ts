export interface INumberButton {
    onClick: () => void;
    type: 'plus' | 'minus';
    'aria-label'?: string;
}
export declare const defaultProps: INumberButton;
