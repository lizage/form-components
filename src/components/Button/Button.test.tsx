import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <Button
        onClick={() => console.log("button was clicked")}
        children={"Click me"}
        use={"primary"}
        id={"button_01"}
        maxWidth={150}
      />
    );
  });
});
