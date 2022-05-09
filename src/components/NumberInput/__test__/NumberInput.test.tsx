import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NumberInput from "../NumberInput";

describe("NumberInput", () => {
  it("should render the NumberInput component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <NumberInput value={0} step={0.7} onChange={mockCallBack} />
    );
    const input = getByTestId("number-input");
    expect(input).toBeTruthy();
  });

  it("should render the correct input type", () => {
    const mockCallBack = jest.fn();
    const inputType = "number";
    const { getByTestId } = render(
      <NumberInput value={0} step={0.7} onChange={mockCallBack} />
    );
    const input = getByTestId("number-input-input");
    expect(input.getAttribute("type")).toBe(inputType);
  });

  it("should call onChange when value is changed", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <NumberInput value={0} step={0.7} onChange={mockCallBack} />
    );
    const input = getByTestId("number-input-input");
    act(() => {
      fireEvent.change(input, { target: { value: 1 } });
    });
    expect(mockCallBack).toHaveBeenCalledWith(1);
  });

  it("should increase according to step when value is integer, step is integer", () => {
    const mockCallBack = jest.fn();
    const value = 3;
    const step = 2;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("plus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(5);
  });

  it("should increase according to step when value is integer, step is float between 0 and 1", () => {
    const mockCallBack = jest.fn();
    const value = 3;
    const step = 0.5;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("plus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(3.5);
  });

  it("should increase according to step when value is float, step is float between 0 and 1", () => {
    const mockCallBack = jest.fn();
    const value = 3.5;
    const step = 0.5;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("plus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(4);
  });

  it("should increase according to step when value is float, step is float larger than 1", () => {
    const mockCallBack = jest.fn();
    const value = 3.5;
    const step = 1.1;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("plus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(4.6);
  });

  it("should decrease according to step when value is integer, step is integer, value > step", () => {
    const mockCallBack = jest.fn();
    const value = 3;
    const step = 2;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("minus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(1);
  });

  it("should decrease according to step when value is integer, step is float between 0 and 1, value > step", () => {
    const mockCallBack = jest.fn();
    const value = 3;
    const step = 0.4;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("minus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(2.6);
  });

  it("should decrease according to step when value is integer, step is float larger than 1, value > step", () => {
    const mockCallBack = jest.fn();
    const value = 3;
    const step = 1.4;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("minus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(1.6);
  });

  it("should not decrease to negative results", () => {
    const mockCallBack = jest.fn();
    const value = 1;
    const step = 2;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("minus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(0);
  });

  it("should not decrease to negative results when step is float between 0 and 1", () => {
    const mockCallBack = jest.fn();
    const value = 0.1;
    const step = 0.5;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("minus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(0);
  });

  it("should not decrease to negative results when step is float larger than 1", () => {
    const mockCallBack = jest.fn();
    const value = 1;
    const step = 1.5;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("minus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(0);
  });

  it("should render float numbers with given number of digits after dot", () => {
    const mockCallBack = jest.fn();
    const value = 3.555;
    const step = 0.6666;
    const { getByTestId } = render(
      <NumberInput value={value} step={step} onChange={mockCallBack} />
    );
    const button = getByTestId("plus-button");
    act(() => {
      fireEvent.click(button);
    });
    expect(mockCallBack).toHaveBeenCalledWith(4.2216);
  });

  // it("should increase correctly when plus button pressed multiple times", () => {});

  // it("should decrease correctly when minus button pressed multiple times", () => {});
});
