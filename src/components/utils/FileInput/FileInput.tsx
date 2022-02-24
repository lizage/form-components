import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FileObject, IFileInput, defaultProps } from "./interface";

export const FileInput: React.FC<IFileInput> = ({
  addFile,
  onFocus,
  onBlur,
  id,
}) => {
  const [file, setFile] = useState<FileObject | null>(null);

  useEffect(() => {
    if (file) {
      addFile(file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const formatFile = (fileObj: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      const fileObject: FileObject = {
        id: uuidv4(),
        name: fileObj.name,
        size: fileObj.size,
        type: fileObj.type,
        url: reader.result as string,
        file: fileObj,
      };

      setFile(fileObject);
    };
    reader.readAsDataURL(fileObj);
  };

  return (
    <input
      type="file"
      capture="environment"
      accept="*"
      onChange={(e) => formatFile(e.target.files?.item(0) as File)}
      onFocus={onFocus}
      onBlur={onBlur}
      id={id}
    />
  );
};

FileInput.defaultProps = defaultProps;

export default FileInput;
