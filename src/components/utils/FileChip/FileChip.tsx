import React from "react";
import { BiX } from "react-icons/bi";
import { IFileChip, defaultProps } from "./interface";
import {
  FileChipStyled,
  FileChipTitleStyled,
  FileChipButtonStyled,
} from "./styles";

export const FileChip: React.FC<IFileChip> = ({
  name,
  showFile,
  removeFile,
}) => (
  <FileChipStyled data-testid="file-chip">
    <FileChipTitleStyled
      onClick={showFile}
      aria-label="open file in new tab"
      data-testid="show-div"
    >
      {name}
    </FileChipTitleStyled>
    <FileChipButtonStyled
      onClick={removeFile}
      aria-label="remove file"
      data-testid="remove-button"
    >
      <BiX aria-hidden />
    </FileChipButtonStyled>
  </FileChipStyled>
);

FileChip.defaultProps = defaultProps;

export default FileChip;
