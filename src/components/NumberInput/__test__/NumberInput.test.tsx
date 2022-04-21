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

  it("should increase correctly according to step", () => {});

  it("should decrease correctly according to step", () => {});

  it("should not decrease to negative results", () => {});

  it("should render float numbers correctly", () => {});
});
