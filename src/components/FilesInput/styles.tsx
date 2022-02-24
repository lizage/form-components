import styled from "styled-components";
import { ThemeProps } from "../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const FilesStyled = styled.div`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  width: 100%;
  min-width: 14rem;
  position: relative;
`;

export const FilesFieldStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: solid 0.1rem ${({ theme }: GlobalThemeProps) => theme.borderColor};
  border-radius: ${({ theme }: GlobalThemeProps) => theme.borderRadius};
  padding: 0 0.5rem;
  gap: 0.5rem;
`;

export const FilePlaceholderStyled = styled.input`
  width: 100%;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 1rem;
  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
  border: none;
  background-color: transparent;
  font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};
  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
`;

export const ListStyled = styled.div`
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
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
