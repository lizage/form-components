import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { ThemeProps } from "../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const SearchInputWrapStyled = styled.div`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 0.1rem ${({ theme }: GlobalThemeProps) => theme.borderColor};
  border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
  width: 100%;
  min-width: 14rem;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const SearchInputStyled = styled.input.attrs({ type: "text" })`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  width: 100%;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.5rem 1rem;
  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
  border: none;
  background-color: transparent;
  transition: all 350ms ease-in-out;
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

export const SearchIconStyled = styled(BiSearchAlt)`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0 0.1rem;
  transition: all 350ms ease-in-out;
  font-size: 2.3rem;
  * {
    color: ${({ theme }: GlobalThemeProps) => theme.buttonIconColor};
  }
`;
