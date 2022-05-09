import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RadioButtons from "../RadioButtons";

describe("RadioButtons", () => {
  it("should render the RadioButtons component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <RadioButtons
        options={["111", "222", "333"]}
        currentOption={"111"}
        onChange={mockCallBack}
        maxWidth={300}
      />
    );
    const input = getByTestId("radio-buttons");
    expect(input).toBeTruthy();
  });

  it("should call onChange when label is clicked", () => {});

  it("should render the labels correctly", () => {
    const mockCallBack = jest.fn();
    const labels = ["111", "222", "333"];
    const { getByTestId } = render(
      <RadioButtons
        options={labels}
        currentOption={"111"}
        onChange={mockCallBack}
        maxWidth={300}
      />
    );
    const label0 = getByTestId("radio-label-0");
    const label1 = getByTestId("radio-label-1");
    const label2 = getByTestId("radio-label-2");
    expect(label0.innerHTML).toBe("111");
    expect(label1.innerHTML).toBe("222");
    expect(label2.innerHTML).toBe("333");
  });
});
