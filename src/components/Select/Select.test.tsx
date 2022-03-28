import React from "react";
import { render } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
  test("renders the Select component", () => {
    render(
      <Select
        value={""}
        onChange={() => console.log("select has changed")}
        options={["111", "222", "333"]}
        placeholder={"please choose an option"}
        maxWidth={250}
        aria-label={"select input"}
      />
    );
  });
});
