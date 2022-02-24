export interface IClearButton {
  onClick: () => void
  'aria-label'?: string
}

export const defaultProps: IClearButton = {
  onClick: () => null,
  'aria-label': 'clear input button',
}
