export interface FileObject {
    id: string;
    name: string;
    size: number;
    type: string;
    url: string;
    file: File;
}
export interface IFileInput {
    addFile: (value: FileObject) => void;
    onFocus?: any;
    onBlur?: any;
    id?: string;
    "aria-label"?: string;
}
export declare const defaultProps: IFileInput;
