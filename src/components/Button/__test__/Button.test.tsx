import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "../Button";

describe("Button", () => {
  test("render the Button component", () => {
    const { getByTestId } = render(
      <Button
        onClick={() => console.log("button was clicked")}
        children={"click me"}
      />
    );
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });

  test("render the children props", () => {
    const childrenValue = "click me";
    const { getByTestId } = render(
      <Button
        onClick={() => console.log("button was clicked")}
        children={childrenValue}
      />
    );
    const button = getByTestId("button");
    expect(button.innerHTML).toBe(childrenValue);
  });

  test("click the button", () => {
    act(async () => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <Button onClick={mockCallBack} children={"click me"} />
      );
      const button = getByTestId("button");
      await fireEvent.click(button);
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
