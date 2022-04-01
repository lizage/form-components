import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import TextInput from "../TextInput";

describe("TextInput", () => {
  it("should render the TextInput component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <TextInput value={""} onChange={mockCallBack} />
    );
    const input = getByTestId("text-input");
    expect(input).toBeTruthy();
  });

  it("should render the placeholder", () => {
    const mockCallBack = jest.fn();
    const placeholderValue = "Please type something";
    const { getByTestId } = render(
      <TextInput
        value={"value string"}
        onChange={mockCallBack}
        placeholder={placeholderValue}
      />
    );
    const input = getByTestId("text-input");
    expect(input.getAttribute("placeholder")).toBe(placeholderValue);
  });

  it("should render the correct input type", () => {
    const mockCallBack = jest.fn();
    const inputType = "text";
    const { getByTestId } = render(
      <TextInput value={"value string"} onChange={mockCallBack} />
    );
    const input = getByTestId("text-input");
    expect(input.getAttribute("type")).toBe(inputType);
  });

  it("should render the ClearButton if value is not empty", () => {
    const mockCallBack = jest.fn();
    const valueString = "some text";
    const { getByTestId } = render(
      <TextInput value={valueString} onChange={mockCallBack} />
    );
    const clearButton = getByTestId("clear-button");
    expect(clearButton).toBeTruthy();
  });

  it("should not render the ClearButton if value is empty", () => {
    const mockCallBack = jest.fn();
    const valueString = "";
    const { queryByTestId } = render(
      <TextInput value={valueString} onChange={mockCallBack} />
    );
    const clearButton = queryByTestId("clear-button");
    expect(clearButton).toBeFalsy();
  });

  it("should call onchange", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <TextInput value={"some text"} onChange={mockCallBack} />
    );
    const input = getByTestId("text-input");
    act(() => {
      fireEvent.change(input, { target: { value: "other text" } });
    });
    expect(mockCallBack).toHaveBeenCalledWith("other text");
  });
});
