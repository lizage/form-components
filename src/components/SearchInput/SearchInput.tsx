import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { ISearchInput, defaultProps } from "./interface";
import ClearButton from "../utils/ClearButton/ClearButton";
import {
  SearchInputWrapStyled,
  SearchInputStyled,
  SearchIconStyled,
} from "./styles";

export const SearchInput: React.FC<ISearchInput> = ({
  onChange,
  maxWidth,
  theme,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SearchInputWrapStyled style={{ maxWidth }} data-testid="search-input">
        <SearchInputStyled
          {...props}
          onChange={(e) => onChange(e.target.value)}
        />
        {props.value !== "" ? (
          <ClearButton onClick={() => onChange("")} />
        ) : (
          <SearchIconStyled aria-hidden />
        )}
      </SearchInputWrapStyled>
    </ThemeProvider>
  );
};

SearchInput.defaultProps = defaultProps;

export default SearchInput;
