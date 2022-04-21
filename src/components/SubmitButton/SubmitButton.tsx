import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { ISubmitButton, defaultProps } from "./interface";
import { SubmitButtonStyled } from "./styles";

export const SubmitButton: React.FC<ISubmitButton> = (props) => (
  <ThemeProvider theme={props.theme}>
    <GlobalStyle />
    <SubmitButtonStyled {...props} data-testid="submit-button" />
  </ThemeProvider>
);

SubmitButton.defaultProps = defaultProps;

export default SubmitButton;
