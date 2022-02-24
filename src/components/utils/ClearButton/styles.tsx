import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme";
import { IClearButton } from "./interface";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const ClearButtonStyled = styled.button<IClearButton>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 350ms ease-in-out;
  * {
    color: ${({ theme }: GlobalThemeProps) => theme.buttonFontColor};
    transition: all 350ms ease-in-out;
    font-size: 2.6rem;
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
