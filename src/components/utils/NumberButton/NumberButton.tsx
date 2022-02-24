import React from 'react'
import { INumberButton, defaultProps } from './interface'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { NumberButtonStyled } from './styles'

export const NumberButton: React.FC<INumberButton> = ({ onClick, type }) => {
  return (
    <NumberButtonStyled
      onClick={onClick}
      aria-label={type === 'plus' ? 'plus button' : 'minus button'}
    >
      {type === 'plus' && <BiPlus aria-hidden />}
      {type === 'minus' && <BiMinus aria-hidden />}
    </NumberButtonStyled>
  )
}

NumberButton.defaultProps = defaultProps

export default NumberButton
