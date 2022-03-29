import React from "react";
import { render } from "@testing-library/react";
import Options from "./Options";

describe("Options", () => {
  test("renders the Options component", () => {
    render(
      <Options
        options={["111", "222", "333"]}
        chooseOption={() => console.log("choose option")}
        maxWidth={250}
      />
    );
  });
});
