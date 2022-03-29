import React from "react";
import { render } from "@testing-library/react";
import OptionsMultiple from "./OptionsMultiple";

describe("OptionsMultiple", () => {
  test("renders the OptionsMultiple component", () => {
    render(
      <OptionsMultiple
        chosenOptions={[]}
        options={["111", "222", "333"]}
        chooseOption={() => console.log("choose option")}
        maxWidth={250}
      />
    );
  });
});
