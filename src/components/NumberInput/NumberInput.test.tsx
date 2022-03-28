import React from "react";
import { render } from "@testing-library/react";
import NumberInput from "./NumberInput";

describe("NumberInput", () => {
  test("renders the NumberInput component", () => {
    render(
      <NumberInput
        value={0}
        step={0.7}
        onChange={() => console.log("Number has changed")}
        placeholder={0}
        maxWidth={150}
        aria-label={"number input"}
      />
    );
  });
});
