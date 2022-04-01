import React, { useEffect, useRef } from "react";
import { IOptions, defaultProps } from "./interface";
import { OptionsStyled, OptionStyled } from "./styles";

export const Options: React.FC<IOptions> = ({
  chooseOption,
  options,
  maxWidth,
  theme,
}) => {
  const optionsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // populate refs array, focus on first el
    optionsRef.current = optionsRef.current.slice(0, options.length);
    optionsRef.current[0]?.focus();
    addStyle(optionsRef.current[0] as HTMLButtonElement);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  useEffect(() => {
    // manage style on mouse click or hover
    const handleHoverStyle = (e: MouseEvent) => {
      const index = optionsRef.current.findIndex(
        (item) => item && item === e.target
      );
      if (index !== -1) {
        for (let i in optionsRef.current) {
          removeStyle(optionsRef.current[i] as HTMLButtonElement);
        }
        addStyle(optionsRef.current[index] as HTMLButtonElement);
      }
    };
    if (window.innerWidth > 900) {
      document.addEventListener("mouseover", handleHoverStyle);
    }
    document.addEventListener("mousedown", handleHoverStyle);
    return () => {
      document.removeEventListener("mouseover", handleHoverStyle);
      document.removeEventListener("mousedown", handleHoverStyle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsRef]);

  const addStyle = (el: HTMLButtonElement) => {
    el.style.backgroundColor = theme?.delicateColor || "";
  };
  const removeStyle = (el: HTMLButtonElement) => {
    el.style.backgroundColor = "transparent";
  };

  const handleKeyUp = (e: React.KeyboardEvent, i: number) => {
    const key = e.key || e.keyCode;
    let nextIndex = i;

    if (key === "ArrowUp" && i === 0) {
      nextIndex = options.length - 1;
    } else if (key === "ArrowUp" && i > 0) {
      nextIndex = i - 1;
    } else if (key === "ArrowDown" && i < options.length - 1) {
      nextIndex = i + 1;
    } else if (key === "ArrowDown" && i === options.length - 1) {
      nextIndex = 0;
    }

    let nextOption = optionsRef.current[nextIndex] as HTMLButtonElement;
    nextOption?.focus();
    nextOption?.scrollTo();
    removeStyle(optionsRef.current[i] as HTMLButtonElement);
    addStyle(optionsRef.current[nextIndex] as HTMLButtonElement);
  };

  return (
    <OptionsStyled style={{ maxWidth }} data-testid="options-list">
      {options.map((option, i) => (
        <OptionStyled
          key={option}
          ref={(el) => (optionsRef.current[i] = el)}
          onClick={() => chooseOption(option)}
          onKeyUp={(e) => handleKeyUp(e, i)}
          aria-label="option"
          data-testid={`option-row-${i}`}
        >
          {option}
        </OptionStyled>
      ))}
    </OptionsStyled>
  );
};

Options.defaultProps = defaultProps;

export default Options;
