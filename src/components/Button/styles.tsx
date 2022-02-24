import styled from "styled-components";
import { ThemeProps } from "../../styles/theme";
import { IButton } from "./interface";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const ButtonStyled = styled.button<IButton>`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  transition: all 350ms ease-in-out;
  font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};
  border: solid 1px;
  border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
  padding: 1rem 1.5rem;
  cursor: pointer;
  width: 100%;
  max-width: ${(props) =>
    props.maxWidth ? `${props.maxWidth / 10}rem` : "100"};

  color: ${({ use, theme }) =>
    use === "primary" ? theme.focusedFontColor : theme.fontColor};
  border-color: ${({ use, theme }) =>
    use === "primary" ? theme.brightColor : theme.borderColor};
  background-color: ${({ use, theme }) =>
    use === "primary" ? theme.brightColor : theme.borderColor};
  @media only screen and (min-width: 900px) {
    :hover {
      color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
      border-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
      border-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    }
  }
  :active {
    color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
    border-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    border-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
  }
  :focus {
    text-decoration: underline;
  }
`;
