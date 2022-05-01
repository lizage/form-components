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

  it("should call onchange when value is changed", () => {});

  it("should show placeholder when no option is chosen", () => {});

  it("should search the options when value length >= minChars", () => {});

  it("should show options component when value matches one of the options", () => {});

  it("should show options component when value matches more then one of the options", () => {});

  it("should hide options component when option is chosen", () => {});

  it("should hide options component on blur", () => {});
});
