import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const OpenButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  * {
    color: ${({ theme }: GlobalThemeProps) => theme.buttonFontColor};
    transition: all 350ms ease-in-out;
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 900px) {
    :hover {
      background-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
      * {
        color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
      }
    }
  }
  :active {
    background-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    * {
      color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
    }
  }
  :focus {
    background-color: ${({ theme }: GlobalThemeProps) => theme.focusedColor};
    * {
      color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
    }
  }
`;
