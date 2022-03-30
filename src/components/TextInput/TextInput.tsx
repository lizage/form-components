import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { ITextInput, defaultProps } from "./interface";
import ClearButton from "../utils/ClearButton/ClearButton";
import { TextInputWrapStyled, TextInputStyled } from "./styles";

export const TextInput: React.FC<ITextInput> = ({
  onChange,
  maxWidth,
  theme,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TextInputWrapStyled style={{ maxWidth }}>
        <TextInputStyled
          data-testid="text-input"
          {...props}
          onChange={(e) => onChange(e.target.value)}
        />
        {props.value !== "" && <ClearButton onClick={() => onChange("")} />}
      </TextInputWrapStyled>
    </ThemeProvider>
  );
};

TextInput.defaultProps = defaultProps;

export default TextInput;
