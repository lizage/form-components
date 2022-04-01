import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "../Button";

describe("Button", () => {
  it("should render the Button component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Button onClick={mockCallBack} children={"click me"} />
    );
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });

  it("should render the children props", () => {
    const mockCallBack = jest.fn();
    const childrenValue = "click me";
    const { getByTestId } = render(
      <Button onClick={mockCallBack} children={"click me"} />
    );
    const button = getByTestId("button");
    expect(button.innerHTML).toBe(childrenValue);
  });

  it("should click the button", () => {
    act(() => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <Button onClick={mockCallBack} children={"click me"} />
      );
      const button = getByTestId("button");
      fireEvent.click(button);
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
