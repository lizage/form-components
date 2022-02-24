import React, { useEffect, useRef } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import { IOptionsMultiple, defaultProps } from "./interface";
import { OptionsMultipleStyled, OptionMultipleStyled } from "./styles";

export const OptionsMultiple: React.FC<IOptionsMultiple> = ({
  chooseOption,
  options,
  chosenOptions,
  maxWidth,
  theme,
}) => {
  const optionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // populate refs array, focus on first el
    optionsRef.current = optionsRef.current.slice(0, options.length);
    const firstOption = optionsRef.current[0]?.childNodes[0]
      .childNodes[0] as HTMLInputElement;
    firstOption.focus();
    addFocusStyle(optionsRef.current[0] as HTMLDivElement);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  useEffect(() => {
    // manage style on mouse click or hover
    const handleFocusStyle = (e: MouseEvent) => {
      const index = optionsRef.current.findIndex(
        (item) => item && item.contains(e.target as Node)
      );
      if (index !== -1) {
        for (let i in optionsRef.current) {
          removeFocusStyle(optionsRef.current[i] as HTMLDivElement);
        }
        addFocusStyle(optionsRef.current[index] as HTMLDivElement);
      }
    };
    document.addEventListener("mouseover", handleFocusStyle);
    document.addEventListener("mousedown", handleFocusStyle);
    return () => {
      document.removeEventListener("mouseover", handleFocusStyle);
      document.removeEventListener("mousedown", handleFocusStyle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsRef]);

  const addFocusStyle = (el: HTMLDivElement) => {
    el.style.backgroundColor = theme?.delicateColor || "";
  };
  const removeFocusStyle = (el: HTMLDivElement) => {
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

    let nextOption = optionsRef.current[nextIndex]
      ?.childNodes[0] as HTMLDivElement;
    nextOption?.focus();
    nextOption?.scrollTo();
    removeFocusStyle(optionsRef.current[i] as HTMLDivElement);
    addFocusStyle(optionsRef.current[nextIndex] as HTMLDivElement);
  };

  return (
    <OptionsMultipleStyled style={{ maxWidth }}>
      {options.map((option, i) => (
        <OptionMultipleStyled
          key={option}
          ref={(el) => (optionsRef.current[i] = el)}
          onKeyUp={(e) => handleKeyUp(e, i)}
        >
          <Checkbox
            value={chosenOptions.includes(option)}
            onChange={() => chooseOption(option)}
            labelText={option}
          />
        </OptionMultipleStyled>
      ))}
    </OptionsMultipleStyled>
  );
};

OptionsMultiple.defaultProps = defaultProps;

export default OptionsMultiple;
