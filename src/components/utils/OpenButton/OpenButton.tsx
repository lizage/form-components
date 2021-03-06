import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IOpenButton, defaultProps } from "./interface";
import { OpenButtonStyled } from "./styles";

export const OpenButton: React.FC<IOpenButton> = ({
  onClick,
  isOpen,
  ...props
}) => {
  const handleKeyUp = (e: React.KeyboardEvent) => {
    const key = e.key || e.keyCode;
    if (key === "ArrowDown" || key === "ArrowUp") {
      onClick();
    }
  };

  return (
    <OpenButtonStyled
      onClick={onClick}
      onKeyUp={(e) => handleKeyUp(e)}
      aria-label="open or close options list"
      aria-expanded={isOpen}
      data-testid="open-button"
      {...props}
    >
      {isOpen ? (
        <BiChevronUp aria-hidden data-testid="chevron-up" />
      ) : (
        <BiChevronDown aria-hidden data-testid="chevron-down" />
      )}
    </OpenButtonStyled>
  );
};

OpenButton.defaultProps = defaultProps;

export default OpenButton;
