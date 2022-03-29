import React from "react";
import { render } from "@testing-library/react";
import FileChip from "./FileChip";

describe("FileChip", () => {
  test("renders the FileChip component", () => {
    render(
      <FileChip
        key={"id_1"}
        name={"name_1"}
        removeFile={() => console.log("remove file")}
        showFile={() => console.log("show file")}
      />
    );
  });
});
