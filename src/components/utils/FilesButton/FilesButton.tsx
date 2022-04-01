import React, { useRef, useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { IFilesButton, defaultProps } from "./interface";
import { FileLabelStyled, FileIconStyled, FileInputStyled } from "./styles";

export const FilesButton: React.FC<IFilesButton> = ({ addFile, id, theme }) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // manage style on mouse click or hover
    const handleFocusStyle = (e: MouseEvent) => {
      if (buttonRef.current?.contains(e.target as HTMLInputElement)) {
        addFocusStyle(buttonRef.current);
      } else {
        removeFocusStyle(buttonRef.current as HTMLDivElement);
      }
    };
    if (window.innerWidth > 900) {
      document.addEventListener("mouseover", handleFocusStyle);
    }
    document.addEventListener("mousedown", handleFocusStyle);
    return () => {
      document.removeEventListener("mouseover", handleFocusStyle);
      document.removeEventListener("mousedown", handleFocusStyle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonRef]);

  const addFocusStyle = (el: HTMLDivElement) => {
    el.style.backgroundColor = theme?.focusedColor || "";
    el.style.color = theme?.focusedFontColor || "";
  };
  const removeFocusStyle = (el: HTMLDivElement) => {
    el.style.backgroundColor = "transparent";
    el.style.color = theme?.buttonFontColor || "";
  };

  const onFocus = (e: Event) => {
    addFocusStyle((e.target as Node).nextSibling as HTMLDivElement);
  };

  const onBlur = (e: Event) => {
    removeFocusStyle((e.target as Node).nextSibling as HTMLDivElement);
  };

  return (
    <FileLabelStyled data-testid="files-button">
      <FileInputStyled
        addFile={addFile}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label="file input"
        id={id}
      />
      <FileIconStyled ref={buttonRef} aria-hidden>
        <BiPlus aria-hidden />
      </FileIconStyled>
    </FileLabelStyled>
  );
};

FilesButton.defaultProps = defaultProps;

export default FilesButton;
