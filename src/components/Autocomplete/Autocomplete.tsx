import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import TextInput from "../TextInput/TextInput";
import Options from "../utils/Options/Options";
import { IAutocomplete, defaultProps } from "./interface";
import { AutocompleteWrapStyled } from "./styles";

export const Autocomplete: React.FC<IAutocomplete> = ({
  value,
  placeholder,
  onChange,
  options,
  minChars,
  id,
  maxWidth,
  theme,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isChosen, setIsChosen] = useState(false);

  useEffect(() => {
    // manage suggestions array
    if (value.split("").length >= minChars && !isChosen) {
      setFilteredOptions(options.filter((item) => item.includes(value)));
    } else {
      setFilteredOptions([]);
      setIsChosen(false);
    }
  }, [value, minChars, options, isChosen]);

  useEffect(() => {
    // close on unfocus
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setFilteredOptions([]);
        setIsChosen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const chooseOption = (option: string) => {
    setIsChosen(true);
    onChange(option);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AutocompleteWrapStyled ref={wrapperRef} data-testid="autocomplete">
        <TextInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxWidth={maxWidth}
          aria-autocomplete="list"
          aria-label="text input with autocomplete"
          id={id}
        />
        {filteredOptions.length > 0 && (
          <Options
            options={filteredOptions}
            chooseOption={chooseOption}
            maxWidth={maxWidth}
          />
        )}
      </AutocompleteWrapStyled>
    </ThemeProvider>
  );
};

Autocomplete.defaultProps = defaultProps;

export default Autocomplete;
