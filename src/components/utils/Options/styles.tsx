import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const OptionsStyled = styled.div`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  border-bottom: solid 0.1rem
    ${({ theme }: GlobalThemeProps) => theme.borderColor};
  border-right: solid 0.1rem
    ${({ theme }: GlobalThemeProps) => theme.borderColor};
  border-left: solid 0.1rem
    ${({ theme }: GlobalThemeProps) => theme.borderColor};
  border-bottom-right-radius: ${({ theme }: GlobalThemeProps) =>
    theme.borderRadius};
  border-bottom-left-radius: ${({ theme }: GlobalThemeProps) =>
    theme.borderRadius};
  background-color: #fff;
  position: absolute;
  top: 3.6rem;
  width: 100%;
  transition: all 250ms ease-in-out;
  max-height: 24.7rem;
  overflow-y: auto;
  z-index: ${({ theme }: GlobalThemeProps) => theme.dropListZIndex};
`;
export const OptionStyled = styled.button`
  border: none;
  background-color: transparent;
  display: block;
  width: 100%;
  text-align: start;
  padding: 1rem 1.5rem;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-contetn: flex-start;
  gap: 1rem;
  font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};
  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
`;
