import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const FileChipStyled = styled.div`
  direction: ltr !important;
  border: solid 0.1rem ${({ theme }: GlobalThemeProps) => theme.delicateColor};
  background-color: ${({ theme }: GlobalThemeProps) => theme.delicateColor};
  border-radius: 2.5rem;
  padding: 0.4rem 1.2rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  transition: all 350ms ease-in-out;
`;

export const FileChipTitleStyled = styled.button`
  direction: ltr !important;
  border: none;
  background-color: transparent;
  max-width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};
  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
  maxwidth: 80%;
  @media only screen and (min-width: 900px) {
    :hover {
      text-decoration: underline;
    }
  }
  :active {
    text-decoration: underline;
  }
  :focus {
    text-decoration: underline;
  }
`;

export const FileChipButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  * {
    margin-top: 0.3rem;
    margin-right: -0.3rem;
    transition: all 350ms ease-in-out;
    border-radius: 50%;
    color: ${({ theme }: GlobalThemeProps) => theme.buttonFontColor};
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 900px) {
    :hover {
      * {
        color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
        background-color: ${({ theme }: GlobalThemeProps) => theme.borderColor};
      }
    }
  }
  :active {
    * {
      color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
      background-color: ${({ theme }: GlobalThemeProps) => theme.borderColor};
    }
  }
  :focus {
    * {
      color: ${({ theme }: GlobalThemeProps) => theme.focusedFontColor};
      background-color: ${({ theme }: GlobalThemeProps) => theme.borderColor};
    }
  }
`;
