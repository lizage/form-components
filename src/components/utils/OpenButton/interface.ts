export interface IOpenButton {
  onClick: () => void;
  isOpen: boolean;
  id?: string;
  "aria-label"?: string;
}

export const defaultProps: IOpenButton = {
  onClick: () => null,
  isOpen: false,
  "aria-label": "open or close options list",
};
