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

  it("should render the label correctly", () => {});

  it("should call onchange when value is changed", () => {});
});
