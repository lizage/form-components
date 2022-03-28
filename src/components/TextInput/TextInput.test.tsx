import React from "react";
import { render } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  test("renders the TextInput component", () => {
    render(
      <TextInput
        value={""}
        onChange={() => console.log("text input has changed")}
        placeholder={"please type here"}
        maxWidth={250}
        aria-label={"single line text input"}
      />
    );
  });
});
