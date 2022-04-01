import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NumberButton from "../NumberButton";

describe("NumberButton", () => {
  it("should render the NumberButton component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <NumberButton type="plus" onClick={mockCallBack} />
    );
    const numberButton = getByTestId("number-button");
    expect(numberButton).toBeTruthy();
  });

  it("should render plus button if type is plus", () => {
    const mockCallBack = jest.fn();
    const buttonType = "plus";
    const { getByTestId } = render(
      <NumberButton type={buttonType} onClick={mockCallBack} />
    );
    const plusButton = getByTestId("plus-button");
    expect(plusButton).toBeTruthy();
  });

  it("should render minus button if type is minus", () => {
    const mockCallBack = jest.fn();
    const buttonType = "minus";
    const { getByTestId } = render(
      <NumberButton type={buttonType} onClick={mockCallBack} />
    );
    const minusButton = getByTestId("minus-button");
    expect(minusButton).toBeTruthy();
  });

  it("should click the button", () => {
    act(() => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <NumberButton type="plus" onClick={mockCallBack} />
      );
      const button = getByTestId("plus-button");
      fireEvent.click(button);
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
