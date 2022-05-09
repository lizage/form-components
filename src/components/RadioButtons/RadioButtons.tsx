import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { IRadio, defaultProps } from "./interface";
import {
  RadioInputWrapStyled,
  RadioLabelStyled,
  RadioOuterCircleStyled,
  RadioInnerCircleStyled,
} from "./styles";

export const RadioButtons: React.FC<IRadio> = ({
  onChange,
  options,
  currentOption,
  name,
  isVertical,
  maxWidth,
  theme,
}) => {
  const buttonsName = name || "radioButtons";
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RadioInputWrapStyled
        style={{ maxWidth, flexDirection: isVertical ? "column" : "row" }}
        data-testid="radio-buttons"
      >
        {options.map((option, i) => (
          <RadioLabelStyled key={option}>
            <input
              type="radio"
              value={option}
              checked={option === currentOption}
              onChange={() => onChange(option)}
              aria-label="radio button option"
              aria-checked={option === currentOption}
              id={`${buttonsName}_option_${i}`}
              name={buttonsName}
              data-testid={`radio-input-${i}`}
            />
            <RadioOuterCircleStyled aria-hidden>
              {option === currentOption && (
                <RadioInnerCircleStyled aria-hidden />
              )}
            </RadioOuterCircleStyled>
            <label
              aria-label="radio button option label"
              htmlFor={`${buttonsName}_option_${i}`}
              data-testid={`radio-label-${i}`}
            >
              {option}
            </label>
          </RadioLabelStyled>
        ))}
      </RadioInputWrapStyled>
    </ThemeProvider>
  );
};

RadioButtons.defaultProps = defaultProps;

export default RadioButtons;
