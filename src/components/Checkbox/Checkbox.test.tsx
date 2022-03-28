import React from "react";
import { render } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("renders the Checkbox component", () => {
    render(
      <Checkbox
        value={false}
        onChange={() => console.log("Checkbox has changed")}
        labelText={"Sure, I've read the manual"}
        aria-label={"checkbox"}
      />
    );
  });
});
