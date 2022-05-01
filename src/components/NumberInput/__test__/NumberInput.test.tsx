import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NumberInput from "../NumberInput";

describe("NumberInput", () => {
  it("should render the NumberInput component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <NumberInput
        value={0}
        step={0.7}
        onChange={mockCallBack}
        placeholder={0}
      />
    );
    const input = getByTestId("number-input");
    expect(input).toBeTruthy();
  });

  it("should render placeholder", () => {});

  it("should call onChange when value is changed", () => {});

  it("should increase according to step when step is integer", () => {});

  it("should increase according to step when step is float between 0 and 1", () => {});

  it("should increase according to step when step is float larger than 1", () => {});

  it("should decrease according to step when step is integer", () => {});

  it("should decrease according to step when step is float between 0 and 1", () => {});

  it("should decrease according to step when step is float larger than 1", () => {});

  it("should not decrease to negative results", () => {});

  it("should not decrease to negative results when step is float between 0 and 1", () => {});

  it("should not decrease to negative results when step is float larger than 1", () => {});

  it("should render float numbers with given number of digits after dot", () => {});

  it("should increase correctly when plus button pressed multiple times", () => {});

  it("should decrease correctly when minus button pressed multiple times", () => {});
});
