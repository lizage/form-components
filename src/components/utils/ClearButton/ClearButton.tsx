import React from 'react'
import { BiX } from 'react-icons/bi'
import { IClearButton, defaultProps } from './interface'
import { ClearButtonStyled } from './styles'

export const ClearButton: React.FC<IClearButton> = ({ onClick }) => {
  return (
    <ClearButtonStyled onClick={onClick}>
      <BiX aria-hidden />
    </ClearButtonStyled>
  )
}

ClearButton.defaultProps = defaultProps

export default ClearButton
