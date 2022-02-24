export interface INumberButton {
  onClick: () => void
  type: 'plus' | 'minus'
  'aria-label'?: string
}

export const defaultProps: INumberButton = {
  onClick: () => console.log('button was clicked'),
  type: 'plus',
  'aria-label': 'plus or minus button',
}
