import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
import { ThemeProps } from "../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const CheckboxLabelStyled = styled.label`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  min-width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  position: relative;
  > input {
    position: absolute;
    top: 0;
    right: auto;
    height: 2.5rem;
    width: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: ${({ theme }: GlobalThemeProps) => theme.dropListZIndex};
  }
  > input:focus + div:after {
    content: "";
    border: solid 0.2rem ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
    top: 0;
    right: 0;
    left: 0;
    height: 2.2rem;
    width: 2.2rem;
    position: absolute;
    transition: all 350ms ease-in-out;
  }
  @media only screen and (min-width: 900px) {
    > input:hover + div:after {
      content: "";
      border: solid 0.2rem
        ${({ theme }: GlobalThemeProps) => theme.focusedColor};
      border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
      top: 0;
      right: 0;
      left: 0;
      height: 2.2rem;
      width: 2.2rem;
      position: absolute;
      transition: all 350ms ease-in-out;
    }
  }
  > input:active + div:after {
    content: "";
    border: solid 0.2rem ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
    top: 0;
    right: 0;
    left: 0;
    height: 2.2rem;
    width: 2.2rem;
    position: absolute;
    transition: all 350ms ease-in-out;
  }
`;

export const CheckboxBoxStyled = styled.div`
  border: solid 0.1rem ${({ theme }: GlobalThemeProps) => theme.borderColor};
  border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
  height: 2.5rem;
  width: 2.5rem;
  background-color: rgba(255, 255, 255, 1);
`;

export const CheckboxIconStyled = styled(BiCheck)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  font-size: 2.5rem;
  * {
    color: ${({ theme }: GlobalThemeProps) => theme.brightColor};
    transition: all 350ms ease-in-out;
  }
`;

export const CheckboxLabelTextStyled = styled.label`
  display: block;
  cursor: pointer;
  font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};
  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
`;
