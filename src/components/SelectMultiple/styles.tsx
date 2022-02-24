import styled from "styled-components";
import { ThemeProps } from "../../styles/theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const SelectMultipleWrapStyled = styled.div`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  position: relative;
  width: 100%;
`;

export const SelectMultipleBoxStyled = styled.div`
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

export const SelectMultipleInputStyled = styled.input`
  direction: ${({ theme }: GlobalThemeProps) => theme.direction};
  width: 100%;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  border: none;
  background-color: transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: ${({ theme }: GlobalThemeProps) => theme.fontFamily};
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize};
  color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
`;
