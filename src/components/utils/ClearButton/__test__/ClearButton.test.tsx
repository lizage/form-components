import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ClearButton from "../ClearButton";

describe("ClearButton", () => {
  it("should render the ClearButton component", () => {
    const mockCallBack = jest.fn();
    render(<ClearButton onClick={mockCallBack} />);
  });

  it("should click the button", () => {
    act(() => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(<ClearButton onClick={mockCallBack} />);
      const button = getByTestId("clear-button");
      fireEvent.click(button);
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
