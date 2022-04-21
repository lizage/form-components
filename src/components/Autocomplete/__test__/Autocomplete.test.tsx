import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Autocomplete from "../Autocomplete";

describe("Autocomplete", () => {
  it("should render the Autocomplete component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Autocomplete
        value={""}
        onChange={mockCallBack}
        options={["111", "222", "333"]}
        placeholder={"please type here"}
        minChars={3}
      />
    );
    const input = getByTestId("autocomplete");
    expect(input).toBeTruthy();
  });

  it("should do something", () => {});
});
