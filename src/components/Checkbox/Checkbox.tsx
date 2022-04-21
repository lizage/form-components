import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { ICheckbox, defaultProps } from "./interface";
import {
  CheckboxLabelStyled,
  CheckboxIconStyled,
  CheckboxBoxStyled,
  CheckboxLabelTextStyled,
} from "./styles";

export const Checkbox: React.FC<ICheckbox> = ({
  onChange,
  value,
  labelText,
  theme,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CheckboxLabelStyled data-testid="checkbox">
        <input
          {...props}
          type="checkbox"
          checked={value}
          aria-checked={value}
          onChange={() => onChange(!value)}
        />
        <CheckboxBoxStyled aria-hidden>
          {value && <CheckboxIconStyled aria-hidden />}
        </CheckboxBoxStyled>

        {labelText && (
          <CheckboxLabelTextStyled htmlFor={props.id} {...props}>
            {labelText}
          </CheckboxLabelTextStyled>
        )}
      </CheckboxLabelStyled>
    </ThemeProvider>
  );
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
