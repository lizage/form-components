import React from "react";
import { render } from "@testing-library/react";
import NumberButton from "./NumberButton";

describe("NumberButton", () => {
  test("renders the NumberButton component", () => {
    render(
      <NumberButton type="plus" onClick={() => console.log("increase")} />
    );
  });
});
