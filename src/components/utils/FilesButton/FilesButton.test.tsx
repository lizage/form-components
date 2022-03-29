import React from "react";
import { render } from "@testing-library/react";
import FilesButton from "./FilesButton";

describe("FilesButton", () => {
  test("renders the FilesButton component", () => {
    render(<FilesButton addFile={() => console.log("add file")} id={"id_1"} />);
  });
});
