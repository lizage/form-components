import React from "react";
import { render } from "@testing-library/react";
import SelectMultiple from "./SelectMultiple";

describe("SelectMultiple", () => {
  test("renders the SelectMultiple component", () => {
    render(
      <SelectMultiple
        chosenOptions={[]}
        onChange={() => console.log("select multiple has changed")}
        options={["111", "222", "333"]}
        placeholder={"please choose some options"}
        singleLabel={"One option was chosen"}
        multipleLabel={"options were chosen"}
        maxWidth={250}
        aria-label={"multiple select input"}
      />
    );
  });
});
