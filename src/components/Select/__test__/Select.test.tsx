import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Select from "../Select";

describe("Select", () => {
  it("should render the Select component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Select
        value={""}
        onChange={mockCallBack}
        options={["111", "222", "333"]}
        placeholder={"please choose an option"}
      />
    );
    const select = getByTestId("select");
    expect(select).toBeTruthy();
  });

  it("should call onChange when option is chosen", () => {});

  it("should show options component when open", () => {});

  it("should hide options component when closed", () => {});

  it("should hide options component on blur", () => {});

  it("should show placeholder when no option is chosen", () => {});

  it("should show option name when an option is chosen", () => {});
});
