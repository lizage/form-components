import React from "react";
import { render } from "@testing-library/react";
import ClearButton from "./ClearButton";

describe("ClearButton", () => {
  test("renders the ClearButton component", () => {
    render(<ClearButton onClick={() => console.log("X")} />);
  });
});
