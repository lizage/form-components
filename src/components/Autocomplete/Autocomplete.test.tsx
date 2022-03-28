import React from "react";
import { render } from "@testing-library/react";
import Autocomplete from "./Autocomplete";

describe("Autocomplete", () => {
  test("renders the Autocomplete component", () => {
    render(
      <Autocomplete
        value={""}
        onChange={() => console.log("Autocomplete changed")}
        options={["111", "222", "333"]}
        placeholder={"please type here"}
        minChars={3}
        maxWidth={250}
        aria-label={"autocomplete input"}
      />
    );
  });
});
