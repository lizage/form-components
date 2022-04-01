import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import OpenButton from "../OpenButton";

describe("OpenButton", () => {
  it("should render the OpenButton component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <OpenButton isOpen={true} onClick={mockCallBack} />
    );
    const openButton = getByTestId("open-button");
    expect(openButton).toBeTruthy();
  });

  it("should show chevron up icon if open", () => {
    const mockCallBack = jest.fn();
    const isOpen = true;
    const { getByTestId } = render(
      <OpenButton isOpen={isOpen} onClick={mockCallBack} />
    );
    const chevronUpIcon = getByTestId("chevron-up");
    expect(chevronUpIcon).toBeTruthy();
  });

  it("should show chevron down icon if closed", () => {
    const mockCallBack = jest.fn();
    const isOpen = false;
    const { getByTestId } = render(
      <OpenButton isOpen={isOpen} onClick={mockCallBack} />
    );
    const chevronDownIcon = getByTestId("chevron-down");
    expect(chevronDownIcon).toBeTruthy();
  });

  it("should click the button", () => {
    act(() => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <OpenButton isOpen={true} onClick={mockCallBack} />
      );
      const openButton = getByTestId("open-button");
      fireEvent.click(openButton);
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

  it("should activate the button onclick fn on keyboard arrow down", () => {
    act(() => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <OpenButton isOpen={true} onClick={mockCallBack} />
      );
      const openButton = getByTestId("open-button");
      fireEvent.keyUp(openButton, { key: "ArrowDown", code: 40 });
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

  it("should activate the button onclick fn on keyboard arrow up", () => {
    act(() => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <OpenButton isOpen={true} onClick={mockCallBack} />
      );
      const openButton = getByTestId("open-button");
      fireEvent.keyUp(openButton, { key: "ArrowUp", code: 38 });
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
