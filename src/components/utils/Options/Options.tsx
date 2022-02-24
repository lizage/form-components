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
    addFocusStyle(optionsRef.current[0] as HTMLButtonElement);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  useEffect(() => {
    // manage style on mouse click or hover
    const handleFocusStyle = (e: MouseEvent) => {
      const index = optionsRef.current.findIndex(
        (item) => item && item === e.target
      );
      if (index !== -1) {
        for (let i in optionsRef.current) {
          removeFocusStyle(optionsRef.current[i] as HTMLButtonElement);
        }
        addFocusStyle(optionsRef.current[index] as HTMLButtonElement);
      }
    };
    if (window.innerWidth > 900) {
      document.addEventListener("mouseover", handleFocusStyle);
    }
    document.addEventListener("mousedown", handleFocusStyle);
    return () => {
      document.removeEventListener("mouseover", handleFocusStyle);
      document.removeEventListener("mousedown", handleFocusStyle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsRef]);

  const addFocusStyle = (el: HTMLButtonElement) => {
    el.style.backgroundColor = theme?.delicateColor || "";
  };
  const removeFocusStyle = (el: HTMLButtonElement) => {
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
    removeFocusStyle(optionsRef.current[i] as HTMLButtonElement);
    addFocusStyle(optionsRef.current[nextIndex] as HTMLButtonElement);
  };

  return (
    <OptionsStyled style={{ maxWidth }}>
      {options.map((option, i) => (
        <OptionStyled
          key={option}
          ref={(el) => (optionsRef.current[i] = el)}
          onClick={() => chooseOption(option)}
          onKeyUp={(e) => handleKeyUp(e, i)}
          aria-label="option"
        >
          {option}
        </OptionStyled>
      ))}
    </OptionsStyled>
  );
};

Options.defaultProps = defaultProps;

export default Options;
