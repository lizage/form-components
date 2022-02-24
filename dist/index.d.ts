/// <reference types="react" />
import React$1 from 'react';

interface ThemeProps {
    fontColor: string;
    borderColor: string;
    buttonFontColor: string;
    buttonIconColor: string;
    brightColor: string;
    delicateColor: string;
    focusedColor: string;
    focusedFontColor: string;
    fontFamily: string;
    direction: string;
    fontSize: string;
    borderRadius: string;
    dropListZIndex: number;
}

interface IAutocomplete {
    onChange: (value: string) => void;
    value: string;
    minChars: number;
    options: Array<string>;
    placeholder?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}

declare const Autocomplete: React$1.FC<IAutocomplete>;

interface IButton {
    onClick: () => void;
    children: React.ReactNode;
    id?: string;
    use?: "primary" | "secondary";
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}

declare const Button: React$1.FC<IButton>;

interface ICheckbox {
    onChange: (value: boolean) => void;
    value: boolean;
    labelText: string;
    id?: string;
    theme?: ThemeProps;
    "aria-label"?: string;
    "aria-checked"?: boolean;
}

declare const Checkbox: React$1.FC<ICheckbox>;

interface IFilesInput {
    onChange: (value: Array<File>) => void;
    maxFiles: number;
    placeholder?: string;
    singleLabel?: string;
    multipleLabel?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}

declare const FilesInput: React$1.FC<IFilesInput>;

interface INumberInput {
    onChange: (value: number) => void;
    value: number;
    step: number;
    placeholder?: number;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}

declare const NumberInput: React$1.FC<INumberInput>;

interface IRadio {
    onChange: (value: string) => void;
    options: Array<string>;
    currentOption: string;
    name?: string;
    isVertical?: boolean;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
    "aria-checked"?: string;
}

declare const RadioButtons: React$1.FC<IRadio>;

interface ISearchInput {
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}

declare const SearchInput: React$1.FC<ISearchInput>;

interface ISelect {
    onChange: (value: string) => void;
    value: string;
    options: Array<string>;
    placeholder?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}

declare const Select: React$1.FC<ISelect>;

interface ISelectMultiple {
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

declare const SelectMultiple: React$1.FC<ISelectMultiple>;

interface ISubmitButton {
    onClick: () => void;
    value: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}

declare const SubmitButton: React$1.FC<ISubmitButton>;

interface ITextInput {
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
    id?: string;
    maxWidth?: number;
    theme?: ThemeProps;
    "aria-label"?: string;
}

declare const TextInput: React$1.FC<ITextInput>;

export { Autocomplete, Button, Checkbox, FilesInput, NumberInput, RadioButtons, SearchInput, Select, SelectMultiple, SubmitButton, TextInput };
