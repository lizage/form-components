import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilesButton from "../FilesButton";

describe("FilesButton", () => {
  it("should render the FilesButton component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<FilesButton addFile={mockCallBack} />);
    const filesButton = getByTestId("files-button");
    expect(filesButton).toBeTruthy();
  });

  it("should add style on button when input is focused", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<FilesButton addFile={mockCallBack} />);
    const input = getByTestId("input-file");
    const filesIcon = getByTestId("files-icon");
    input.focus();
    expect(filesIcon.style.backgroundColor).not.toEqual("");
  });

  it("should remove style on button when input is blurred", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<FilesButton addFile={mockCallBack} />);
    const input = getByTestId("input-file");
    const filesIcon = getByTestId("files-icon");
    input.blur();
    expect(filesIcon.style.backgroundColor).toEqual("");
  });

  it("should add style onmouseover", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<FilesButton addFile={mockCallBack} />);
    const filesButton = getByTestId("files-button");
    const filesIcon = getByTestId("files-icon");
    fireEvent.mouseOver(filesButton);
    expect(filesIcon.style.backgroundColor).not.toEqual("");
  });

  it("should remove style onmouseout", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<FilesButton addFile={mockCallBack} />);
    const filesButton = getByTestId("files-button");
    const filesIcon = getByTestId("files-icon");
    fireEvent.mouseOut(filesButton);
    expect(filesIcon.style.backgroundColor).toEqual("");
  });

  it("should add style onmousedown", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<FilesButton addFile={mockCallBack} />);
    const filesButton = getByTestId("files-button");
    const filesIcon = getByTestId("files-icon");
    fireEvent.mouseDown(filesButton);
    expect(filesIcon.style.backgroundColor).not.toEqual("");
  });

  it("should remove style onmouseup", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<FilesButton addFile={mockCallBack} />);
    const filesButton = getByTestId("files-button");
    const filesIcon = getByTestId("files-icon");
    fireEvent.mouseUp(filesButton);
    expect(filesIcon.style.backgroundColor).toEqual("");
  });
});
