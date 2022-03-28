import React from "react";
import { render } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton", () => {
  test("renders the SubmitButton component", () => {
    render(
      <SubmitButton
        value={"Submit"}
        onClick={() => console.log("Please submit the form")}
        maxWidth={150}
      />
    );
  });
});
