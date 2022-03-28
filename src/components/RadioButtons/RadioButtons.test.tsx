import React from "react";
import { render } from "@testing-library/react";
import RadioButtons from "./RadioButtons";

describe("RadioButtons", () => {
  test("renders the RadioButtons component", () => {
    render(
      <RadioButtons
        options={["111", "222", "333"]}
        currentOption={"111"}
        onChange={() => console.log("radio buttons has changed")}
        maxWidth={300}
        isVertical
        aria-label={"radio-buttons"}
      />
    );
  });
});
