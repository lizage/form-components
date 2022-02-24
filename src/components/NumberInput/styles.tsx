import styled from "styled-components";
import { ThemeProps } from "../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const NumberInputWrapStyled = styled.div`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 0.1rem ${({ theme }: GlobalThemeProps) => theme.borderColor};
  border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
  width: 100%;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const NumberInputStyled = styled.input.attrs({ type: "number" })`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  width: 100%;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
  border: none;
  background-color: transparent;
  font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};
  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
  :focus {
    -webkit-box-shadow: inset 0 0 0 0.2rem
      ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    -moz-box-shadow: inset 0 0 0 0.2rem
      ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    box-shadow: inset 0 0 0 0.2rem
      ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
  }
`;
