import React from "react";
import { render } from "@testing-library/react";
import FileInput from "../FileInput";

describe("FileInput", () => {
  it("should render the FileInput component", () => {
    const { getByTestId } = render(
      <FileInput
        addFile={() => console.log("add file")}
        onFocus={() => console.log("on focus")}
        onBlur={() => console.log("on blur")}
      />
    );
    const inputFile = getByTestId("input-file");
    expect(inputFile).toBeTruthy();
  });
});
