import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import OpenButton from "../utils/OpenButton/OpenButton";
import ClearButton from "../utils/ClearButton/ClearButton";
import Options from "../utils/Options/Options";
import { ISelect, defaultProps } from "./interface";
import { SelectWrapStyled, SelectBoxStyled, SelectInputStyled } from "./styles";

export const Select: React.FC<ISelect> = ({
  onChange,
  value,
  options,
  placeholder,
  maxWidth,
  theme,
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [showOptions, setShowOptions] = useState<boolean>(false);

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
    setShowOptions(false);
    onChange(option);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SelectWrapStyled ref={wrapperRef} style={{ maxWidth }}>
        <SelectBoxStyled>
          <SelectInputStyled
            value={value}
            placeholder={placeholder}
            disabled
            aria-label="displays the chosen option"
            {...props}
          />
          {value && value !== "" ? (
            <ClearButton onClick={() => onChange("")} />
          ) : (
            <OpenButton
              isOpen={showOptions}
              onClick={() => setShowOptions(!showOptions)}
            />
          )}
        </SelectBoxStyled>
        {showOptions && (
          <Options
            maxWidth={maxWidth}
            options={options}
            chooseOption={chooseOption}
          />
        )}
      </SelectWrapStyled>
    </ThemeProvider>
  );
};

Select.defaultProps = defaultProps;

export default Select;
