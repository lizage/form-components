import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SubmitButton from "../SubmitButton";

describe("SubmitButton", () => {
  it("should render the SubmitButton component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <SubmitButton value={"Submit"} onClick={mockCallBack} maxWidth={150} />
    );
    const button = getByTestId("submit-button");
    expect(button).toBeTruthy();
  });

  it("should render the correct input type", () => {
    const mockCallBack = jest.fn();
    const inputType = "submit";
    const { getByTestId } = render(
      <SubmitButton value={"Submit"} onClick={mockCallBack} />
    );
    const input = getByTestId("submit-button");
    expect(input.getAttribute("type")).toBe(inputType);
  });

  it("should call onClick on mouse click", () => {
    act(() => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <SubmitButton value={"Submit"} onClick={mockCallBack} />
      );
      const button = getByTestId("submit-button");
      fireEvent.click(button);
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

  it("should call onSubmit on mouse click", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <form onSubmit={mockCallBack}>
        <SubmitButton value={"Submit"} />
      </form>
    );
    const button = getByTestId("submit-button");
    fireEvent.click(button);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
