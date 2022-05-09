import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FilesInput from "../FilesInput";

describe("FilesInput", () => {
  it("should render the FilesInput component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <FilesInput
        onChange={mockCallBack}
        maxFiles={5}
        placeholder={"Add up to 5 files"}
        singleLabel={"One file added"}
        multipleLabel={"files added"}
      />
    );
    const input = getByTestId("files-input");
    expect(input).toBeTruthy();
  });

  it("should call onchange when input value is changed", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <FilesInput onChange={mockCallBack} maxFiles={5} />
    );
    const input = getByTestId("files-input");
    fireEvent.click(input);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("should render placeholder correctly", () => {
    const mockCallBack = jest.fn();
    const placeholder = "add files here";
    const { getByTestId } = render(
      <FilesInput
        onChange={mockCallBack}
        maxFiles={5}
        placeholder={placeholder}
      />
    );
    const input = getByTestId("files-label");
    expect(input.getAttribute("placeholder")).toBe("add files here");
  });

  it("should render single label when one file added", () => {});

  it("should render multiple label when multiple files added", () => {});

  it("should become readonly when maxFiles is reached", () => {});
});
