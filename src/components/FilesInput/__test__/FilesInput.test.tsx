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

  it("should do something", () => {});
});
