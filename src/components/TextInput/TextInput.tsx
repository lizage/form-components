import React from "react";
import { ThemeProvider } from "styled-components";
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
      <TextInputWrapStyled style={{ maxWidth }}>
        <TextInputStyled
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
