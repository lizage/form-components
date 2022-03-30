import styled from "styled-components";
import { ThemeProps } from "../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const TextInputWrapStyled = styled.div`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  border: solid 0.1rem ${({ theme }: GlobalThemeProps) => theme.borderColor};
  border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 14rem;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const TextInputStyled = styled.input.attrs({ type: "text" })`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};

  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
  font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};

  width: 100%;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  transition: all 350ms ease-in-out;
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
