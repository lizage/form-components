import React from "react";
import { render } from "@testing-library/react";
import OpenButton from "./OpenButton";

describe("OpenButton", () => {
  test("renders the OpenButton component", () => {
    render(<OpenButton isOpen={true} onClick={() => console.log("is open")} />);
  });
});
