import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import TextInput from "../TextInput";

describe("TextInput", () => {
  test("render the TextInput component", () => {
    const { getByTestId } = render(
      <TextInput value={""} onChange={() => console.log("onchange")} />
    );
    const input = getByTestId("text-input");
    expect(input).toBeTruthy();
  });

  test("render the placeholder", () => {
    const placeholderValue = "Please type something else";
    const { getByTestId } = render(
      <TextInput
        value={"value string"}
        onChange={() => console.log("onchange")}
        placeholder={placeholderValue}
      />
    );
    const input = getByTestId("text-input");
    expect(input.getAttribute("placeholder")).toBe(placeholderValue);
  });

  test("render the correct type", () => {
    const inputType = "text";
    const { getByTestId } = render(
      <TextInput
        value={"value string"}
        onChange={() => console.log("onchange")}
      />
    );
    const input = getByTestId("text-input");
    expect(input.getAttribute("type")).toBe(inputType);
  });

  test("render the ClearButton", () => {
    const valueString = "some text";
    const { getByTestId } = render(
      <TextInput value={valueString} onChange={() => console.log("onchange")} />
    );
    const clearButton = getByTestId("clear-button");
    expect(clearButton).toBeTruthy();
  });

  test("don't render the ClearButton", () => {
    const valueString = "";
    const { queryByTestId } = render(
      <TextInput value={valueString} onChange={() => console.log("onchange")} />
    );
    const clearButton = queryByTestId("clear-button");
    expect(clearButton).toBeFalsy();
  });

  test("push the ClearButton", () => {
    act(async () => {
      const valueString = "some text";
      const { getByTestId } = render(
        <TextInput
          value={valueString}
          onChange={() => console.log("onchange")}
        />
      );
      const clearButton = getByTestId("clear-button");
      const input = getByTestId("text-input");
      await fireEvent.click(clearButton);
      expect(input.getAttribute("value")).toBe("");
    });
  });

  test("change the input", () => {
    act(async () => {
      const inputValue = "some text";
      const { getByTestId } = render(
        <TextInput value={""} onChange={() => console.log("onchange")} />
      );
      const input = getByTestId("text-input");
      await fireEvent.change(input, { target: { value: inputValue } });
      expect(input.getAttribute("value")).toBe(inputValue);
    });
  });
});
