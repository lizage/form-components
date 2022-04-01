import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FileChip from "../FileChip";

describe("FileChip", () => {
  it("should render the FileChip component", () => {
    const { getByTestId } = render(
      <FileChip
        name={"file1.pdf"}
        showFile={() => console.log("show file")}
        removeFile={() => console.log("remove file")}
      />
    );
    const fileChip = getByTestId("file-chip");
    expect(fileChip).toBeTruthy();
  });

  it("should render file name", () => {
    const fileName = "file1.pdf";
    const { getByTestId } = render(
      <FileChip
        name={fileName}
        showFile={() => console.log("show file")}
        removeFile={() => console.log("remove file")}
      />
    );
    const showDiv = getByTestId("show-div");
    expect(showDiv.innerHTML).toBe("file1.pdf");
  });

  it("should show file", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <FileChip
        name={"file1.pdf"}
        showFile={mockCallBack}
        removeFile={() => console.log("remove file")}
      />
    );
    const showDiv = getByTestId("show-div");
    act(() => {
      fireEvent.click(showDiv);
    });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("should remove file", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <FileChip
        name={"file1.pdf"}
        showFile={() => console.log("show file")}
        removeFile={mockCallBack}
      />
    );
    const removeButton = getByTestId("remove-button");
    act(() => {
      fireEvent.click(removeButton);
    });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
