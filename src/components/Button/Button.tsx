import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { IButton, defaultProps } from "./interface";
import { ButtonStyled } from "./styles";

export const Button: React.FC<IButton> = (props) => (
  <ThemeProvider theme={props.theme}>
    <GlobalStyle />
    <ButtonStyled {...props} />
  </ThemeProvider>
);

Button.defaultProps = defaultProps;

export default Button;
