import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import OpenButton from "../utils/OpenButton/OpenButton";
import OptionsMultiple from "../utils/OptionsMultiple/OptionsMultiple";
import { ISelectMultiple, defaultProps } from "./interface";
import {
  SelectMultipleWrapStyled,
  SelectMultipleBoxStyled,
  SelectMultipleInputStyled,
} from "./styles";

export const SelectMultiple: React.FC<ISelectMultiple> = ({
  onChange,
  options,
  chosenOptions,
  placeholder,
  singleLabel,
  multipleLabel,
  maxWidth,
  theme,
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [singleChosenLabel] = useState<string>(
    singleLabel || "One option chosen"
  );
  const [multipleChosenLabel] = useState<string>(
    multipleLabel || "options chosen"
  );

  useEffect(() => {
    // close on unfocus
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const chooseOption = (option: string) => {
    onChange(
      chosenOptions.includes(option)
        ? chosenOptions.filter((item: string) => item !== option)
        : [...chosenOptions, option]
    );
  };

  const chosenLabel = (length: number) => {
    if (length === 0) {
      return "";
    } else if (length === 1) {
      return singleChosenLabel;
    } else return `${chosenOptions.length} ${multipleChosenLabel}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SelectMultipleWrapStyled ref={wrapperRef} style={{ maxWidth }}>
        <SelectMultipleBoxStyled>
          <SelectMultipleInputStyled
            value={chosenLabel(chosenOptions.length)}
            placeholder={placeholder}
            disabled
            aria-label="displays how many options are chosen"
            {...props}
          />
          <OpenButton
            isOpen={showOptions}
            onClick={() => setShowOptions(!showOptions)}
          />
        </SelectMultipleBoxStyled>

        {showOptions && (
          <OptionsMultiple
            chosenOptions={chosenOptions}
            options={options}
            chooseOption={chooseOption}
            maxWidth={maxWidth}
          />
        )}
      </SelectMultipleWrapStyled>
    </ThemeProvider>
  );
};

SelectMultiple.defaultProps = defaultProps;

export default SelectMultiple;
