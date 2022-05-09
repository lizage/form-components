import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  it("should render the Checkbox component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        value={false}
        onChange={mockCallBack}
        labelText={"Sure, I've read the manual"}
      />
    );
    const input = getByTestId("checkbox");
    expect(input).toBeTruthy();
  });

  it("should render the label correctly", () => {
    const mockCallBack = jest.fn();
    const label = "Sure, I've read the manual";
    const { getByTestId } = render(
      <Checkbox value={false} onChange={mockCallBack} labelText={label} />
    );
    const inputLabel = getByTestId("checkbox-label");
    expect(inputLabel.innerHTML).toBe("Sure, I've read the manual");
  });

  it("should call onchange when value is changed", () => {
    const mockCallBack = jest.fn();
    const checkboxValue = false;
    const { getByTestId } = render(
      <Checkbox
        value={checkboxValue}
        onChange={mockCallBack}
        labelText={"Sure, I've read the manual"}
      />
    );
    const checkbox = getByTestId("checkbox");
    act(() => {
      fireEvent.click(checkbox);
    });
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(checkbox.nodeValue).not.toEqual(checkboxValue);
  });
});
