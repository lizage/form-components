export interface IFileChip {
  showFile: () => void

  removeFile: () => void
  name: string
  id?: string
}

export const defaultProps: IFileChip = {
  showFile: () => null,
  removeFile: () => null,
  name: '',
}
