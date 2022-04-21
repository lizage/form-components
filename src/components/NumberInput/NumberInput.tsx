import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import NumberButton from "../utils/NumberButton/NumberButton";
import { INumberInput, defaultProps } from "./interface";
import { NumberInputWrapStyled, NumberInputStyled } from "./styles";

export const NumberInput: React.FC<INumberInput> = ({
  value,
  step,
  placeholder,
  onChange,
  maxWidth,
  theme,
  ...props
}) => {
  const [maxFloat, setMaxFloat] = useState<number>(0);
  useEffect(() => {
    // check how many digits after floating point
    const isFloat = value.toString().split(".").length > 1;
    const floatNumber = isFloat
      ? value.toString().split(".")[1].split("").length
      : 0;
    setMaxFloat(floatNumber);
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
        <NumberButton type="plus" onClick={() => increase()} />
        <NumberInputStyled
          value={value || placeholder}
          onChange={(e) => onChange(Number(e.target.value))}
          {...props}
        />
        <NumberButton type="minus" onClick={() => decrease()} />
      </NumberInputWrapStyled>
    </ThemeProvider>
  );
};

NumberInput.defaultProps = defaultProps;

export default NumberInput;
