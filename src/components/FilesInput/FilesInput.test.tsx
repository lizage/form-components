import React from "react";
import { render } from "@testing-library/react";
import FilesInput from "./FilesInput";

describe("FilesInput", () => {
  test("renders the FilesInput component", () => {
    render(
      <FilesInput
        onChange={() => console.log("File input has changed")}
        maxFiles={5}
        maxWidth={250}
        placeholder={"Add up to 5 files"}
        singleLabel={"One file added"}
        multipleLabel={"files added"}
      />
    );
  });
});
