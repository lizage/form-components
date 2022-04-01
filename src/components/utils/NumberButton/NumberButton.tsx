import React from "react";
import { INumberButton, defaultProps } from "./interface";
import { BiPlus, BiMinus } from "react-icons/bi";
import { NumberButtonStyled } from "./styles";

export const NumberButton: React.FC<INumberButton> = ({ onClick, type }) => {
  return (
    <NumberButtonStyled
      onClick={onClick}
      aria-label={type === "plus" ? "plus button" : "minus button"}
      data-testid="number-button"
    >
      {type === "plus" && <BiPlus aria-hidden data-testid="plus-button" />}
      {type === "minus" && <BiMinus aria-hidden data-testid="minus-button" />}
    </NumberButtonStyled>
  );
};

NumberButton.defaultProps = defaultProps;

export default NumberButton;
