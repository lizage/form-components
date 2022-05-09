import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import NumberButton from "../utils/NumberButton/NumberButton";
import { INumberInput, defaultProps } from "./interface";
import { NumberInputWrapStyled, NumberInputStyled } from "./styles";

export const NumberInput: React.FC<INumberInput> = ({
  value,
  step,
  onChange,
  maxWidth,
  theme,
  ...props
}) => {
  const [maxFloat, setMaxFloat] = useState<number>(0);

  const getFloatNum = (num: number) => {
    return num.toString().split(".").length > 1
      ? num.toString().split(".")[1].split("").length
      : 0;
  };
  useEffect(() => {
    // check how many digits after floating point
    setMaxFloat(Math.max(getFloatNum(value), getFloatNum(step)));
  }, [value, step]);

  const increase = () => {
    onChange(Number((value + step).toFixed(maxFloat)));
  };

  const decrease = () => {
    onChange(value - step > 0 ? Number((value - step).toFixed(maxFloat)) : 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NumberInputWrapStyled style={{ maxWidth }} data-testid="number-input">
        <NumberButton
          type="plus"
          onClick={() => increase()}
          data-testid="plus-button"
        />
        <NumberInputStyled
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          {...props}
          data-testid="number-input-input"
        />
        <NumberButton
          type="minus"
          onClick={() => decrease()}
          data-testid="minus-button"
        />
      </NumberInputWrapStyled>
    </ThemeProvider>
  );
};

NumberInput.defaultProps = defaultProps;

export default NumberInput;
