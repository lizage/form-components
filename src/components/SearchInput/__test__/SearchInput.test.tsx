import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SearchInput from "../SearchInput";

describe("SearchInput", () => {
  it("should render the SearchInput component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <SearchInput
        value={""}
        onChange={mockCallBack}
        placeholder={"items search"}
      />
    );
    const input = getByTestId("search-input");
    expect(input).toBeTruthy();
  });

  it("should render the placeholder", () => {
    const mockCallBack = jest.fn();
    const placeholderValue = "Please type something";
    const { getByTestId } = render(
      <SearchInput
        value={""}
        onChange={mockCallBack}
        placeholder={placeholderValue}
      />
    );
    const input = getByTestId("search-input");
    expect(input.getAttribute("placeholder")).toBe("Please type something");
  });

  it("should render the correct input type", () => {
    const mockCallBack = jest.fn();
    const inputType = "text";
    const { getByTestId } = render(
      <SearchInput
        value={""}
        onChange={mockCallBack}
        placeholder={"items search"}
      />
    );
    const input = getByTestId("search-input");
    expect(input.getAttribute("type")).toBe(inputType);
  });

  it("should render the ClearButton if value is not empty", () => {
    const mockCallBack = jest.fn();
    const valueString = "some text";
    const { getByTestId } = render(
      <SearchInput
        value={valueString}
        onChange={mockCallBack}
        placeholder={"items search"}
      />
    );
    const clearButton = getByTestId("clear-button");
    expect(clearButton).toBeTruthy();
  });

  it("should not render the ClearButton if value is empty", () => {
    const mockCallBack = jest.fn();
    const valueString = "";
    const { queryByTestId } = render(
      <SearchInput
        value={valueString}
        onChange={mockCallBack}
        placeholder={"items search"}
      />
    );
    const clearButton = queryByTestId("clear-button");
    expect(clearButton).toBeFalsy();
  });

  it("should call onchange", () => {
    const mockCallBack = jest.fn();
    const valueString = "some text";
    const { getByTestId } = render(
      <SearchInput
        value={valueString}
        onChange={mockCallBack}
        placeholder={"items search"}
      />
    );
    const input = getByTestId("search-input");
    act(() => {
      fireEvent.change(input, { target: { value: "other text" } });
    });
    expect(mockCallBack).toHaveBeenCalledWith("other text");
  });

  it("should show search icon when empty", () => {
    const mockCallBack = jest.fn();
    const valueString = "";
    const { queryByTestId } = render(
      <SearchInput
        value={valueString}
        onChange={mockCallBack}
        placeholder={"items search"}
      />
    );
    const searchIcon = queryByTestId("search-icon");
    expect(searchIcon).toBeTruthy();
  });
});
