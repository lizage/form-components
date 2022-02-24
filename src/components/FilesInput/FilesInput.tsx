import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import FilesButton from "../utils/FilesButton/FilesButton";
import OpenButton from "../utils/OpenButton/OpenButton";
import FileChip from "../utils/FileChip/FileChip";
import { FileObject } from "../utils/FileInput/interface";
import { IFilesInput, defaultProps } from "./interface";
import {
  FilesStyled,
  FilesFieldStyled,
  FilePlaceholderStyled,
  ListStyled,
} from "./styles";

const FilesInput: React.FC<IFilesInput> = ({
  onChange,
  maxFiles,
  id,
  maxWidth,
  theme,
  placeholder,
  singleLabel,
  multipleLabel,
}) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [singleChosenLabel] = useState<string>(singleLabel || "One file added");
  const [multipleChosenLabel] = useState<string>(
    multipleLabel || "files added"
  );
  const [chosenFilesLocal, setChosenFilesLocal] = useState<FileObject[]>([]);

  useEffect(() => {
    setShowList(chosenFilesLocal.length > 0);
    onChange(
      chosenFilesLocal.map((item) => {
        return item.file;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenFilesLocal]);

  const addFile = (file: FileObject) => {
    setChosenFilesLocal([...chosenFilesLocal, file]);
  };

  const removeFile = (file: FileObject) => {
    setChosenFilesLocal(
      chosenFilesLocal.filter((fileItem) => fileItem.id !== file.id)
    );
  };

  const showFile = (file: FileObject) => {
    window.open(file.url);
  };

  const filesLabel = (length: number) => {
    if (length === 0) {
      return "";
    } else if (length === 1) {
      return singleChosenLabel;
    } else return `${chosenFilesLocal.length} ${multipleChosenLabel}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FilesStyled style={{ maxWidth }}>
        <FilesFieldStyled>
          <FilePlaceholderStyled
            type="text"
            value={filesLabel(chosenFilesLocal.length)}
            placeholder={placeholder}
            disabled
            aria-label="displays how many files were added"
          />
          {chosenFilesLocal.length < maxFiles && (
            <FilesButton addFile={addFile} id={id} />
          )}
          {chosenFilesLocal.length > 0 && (
            <OpenButton
              isOpen={showList}
              onClick={() => setShowList(!showList)}
            />
          )}
        </FilesFieldStyled>
        {showList && (
          <ListStyled>
            {chosenFilesLocal.map((fileItem: FileObject) => (
              <FileChip
                key={fileItem.id}
                name={fileItem.name}
                removeFile={() => removeFile(fileItem)}
                showFile={() => showFile(fileItem)}
              />
            ))}
          </ListStyled>
        )}
      </FilesStyled>
    </ThemeProvider>
  );
};

FilesInput.defaultProps = defaultProps;

export default FilesInput;
