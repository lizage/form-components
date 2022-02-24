import styled from "styled-components";
import { ThemeProps } from "../../styles/theme";
import { ISubmitButton } from "./interface";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const SubmitButtonStyled = styled.input.attrs({
  type: "submit",
})<ISubmitButton>`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  transition: all 350ms ease-in-out;
  font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};
  border: solid 1px;
  border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
  border-color: ${({ theme }: GlobalThemeProps) => theme.brightColor};
  background-color: ${({ theme }: GlobalThemeProps) => theme.brightColor};
  width: 100%;
  max-width: ${(props) =>
    props.maxWidth ? `${props.maxWidth / 10}rem` : "100"};
  @media only screen and (min-width: 900px) {
    :hover {
      color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
      border-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
      background-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    }
  }
  :active {
    color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
    border-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    background-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
  }
  :focus {
    text-decoration: underline;
  }
`;
