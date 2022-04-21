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

  it("should render the placeholder", () => {});

  it("should render the correct input type", () => {});

  it("should render the ClearButton if value is not empty", () => {});

  it("should not render the ClearButton if value is empty", () => {});

  it("should call onchange", () => {});

  it("should show search icon when empty", () => {});
});
