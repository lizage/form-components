import React from "react";
import { render } from "@testing-library/react";
import FileInput from "./FileInput";

describe("FileInput", () => {
  test("renders the FileInput component", () => {
    render(
      <FileInput
        addFile={() => console.log("add file")}
        onFocus={() => console.log("on focus")}
        onBlur={() => console.log("on blur")}
        aria-label="file input"
        id={"id_1"}
      />
    );
  });
});
