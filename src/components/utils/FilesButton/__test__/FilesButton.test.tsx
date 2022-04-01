import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FilesButton from "../FilesButton";

describe("FilesButton", () => {
  it("should render the FilesButton component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<FilesButton addFile={mockCallBack} />);
    const filesButton = getByTestId("files-button");
    expect(filesButton).toBeTruthy();
  });
});
