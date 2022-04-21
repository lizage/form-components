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

  it("should render the correct input type", () => {});

  it("should call onClick on mouse click", () => {});

  it("should call onClick on keypress Enter", () => {});
});
