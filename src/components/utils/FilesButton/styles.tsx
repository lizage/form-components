import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme";
import FileInput from "../FileInput/FileInput";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const FileLabelStyled = styled.label`
  position: relative;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms ease-in-out;
  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const FileIconStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms ease-in-out;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: ${({ theme }: GlobalThemeProps) => theme.buttonFontColor};
  * {
    font-size: 2.4rem;
  }
`;

export const FileInputStyled = styled(FileInput)`
  width: 2.5rem;
  height: 2.5rem;
  opacity: 1;
  position: absolute;
  z-index: ${({ theme }: GlobalThemeProps) => theme.dropListZIndex};
`;
