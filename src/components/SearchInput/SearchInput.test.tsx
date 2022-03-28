import React from "react";
import { render } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  test("renders the SearchInput component", () => {
    render(
      <SearchInput
        value={""}
        onChange={() => console.log("search input has changed")}
        placeholder={"items search"}
        maxWidth={250}
        aria-label={"single line search input"}
      />
    );
  });
});
