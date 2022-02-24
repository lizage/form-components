import styled from "styled-components";
import { ThemeProps } from "../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const RadioInputWrapStyled = styled.div`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  width: 100%;
`;

export const RadioLabelStyled = styled.label`
  width: 100%;
  min-width: 8rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  position: relative;
  > input {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    opacity: 0;
    z-index: ${({ theme }: GlobalThemeProps) => theme.dropListZIndex};
  }
  > input:focus + div:after {
    content: "";
    border: solid 0.2rem ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    border-radius: 50%;
    top: 0;
    right: 0;
    left: 0;
    height: 2.1rem;
    width: 2.1rem;
    position: absolute;
    transition: all 350ms ease-in-out;
  }
  @media only screen and (min-width: 900px) {
    > input:hover + div:after {
      content: "";
      border: solid 0.2rem
        ${({ theme }: GlobalThemeProps) => theme.focusedColor};
      border-radius: 50%;
      top: 0;
      right: 0;
      left: 0;
      height: 2.1rem;
      width: 2.1rem;
      position: absolute;
      transition: all 350ms ease-in-out;
    }
  }
  > input:active + div:after {
    content: "";
    border: solid 0.2rem ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    border-radius: 50%;
    top: 0;
    right: 0;
    left: 0;
    height: 2.1rem;
    width: 2.1rem;
    position: absolute;
    transition: all 350ms ease-in-out;
  }
  > label {
    font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
    font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};
    color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
    cursor: pointer;
  }
`;

export const RadioOuterCircleStyled = styled.div`
  border: solid 0.1rem ${({ theme }: GlobalThemeProps) => theme.borderColor};
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const RadioInnerCircleStyled = styled.div`
  background-color: ${({ theme }: GlobalThemeProps) => theme.brightColor};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transition: all 250ms ease-in-out;
`;
