import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RadioButtons from "../RadioButtons";

describe("RadioButtons", () => {
  it("should render the RadioButtons component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <RadioButtons
        options={["111", "222", "333"]}
        currentOption={"111"}
        onChange={mockCallBack}
        maxWidth={300}
      />
    );
    const input = getByTestId("radio-buttons");
    expect(input).toBeTruthy();
  });

  it("should call onChange when button is clicked", () => {});

  it("should render the labels correctly", () => {});
});
