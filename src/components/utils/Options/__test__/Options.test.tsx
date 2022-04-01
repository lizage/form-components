import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Options from "../Options";

describe("Options", () => {
  Element.prototype.scrollTo = () => {};

  it("should render the Options component", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const options = getByTestId("options-list");
    expect(options).toBeTruthy();
  });

  it("should call chooseOption on click", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const firstOption = getByTestId("option-row-0");
    act(() => {
      fireEvent.click(firstOption);
    });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("should focus on first row right after mount", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const firstOption = getByTestId("option-row-0");
    expect(document.activeElement).toEqual(firstOption);
  });

  it("should focus on next row on arrow down press: first row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const firstOption = getByTestId("option-row-0");
    const secondOption = getByTestId("option-row-1");
    act(() => {
      fireEvent.keyUp(firstOption, { key: "ArrowDown", code: 40 });
    });
    expect(document.activeElement).toEqual(secondOption);
  });

  it("should focus on next row on arrow down press: middle row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const secondOption = getByTestId("option-row-1");
    const thirdOption = getByTestId("option-row-2");
    act(() => {
      fireEvent.keyUp(secondOption, { key: "ArrowDown", code: 40 });
    });
    expect(document.activeElement).toEqual(thirdOption);
  });

  it("should focus back on first row on arrow down press: last row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const thirdOption = getByTestId("option-row-2");
    const firstOption = getByTestId("option-row-0");
    act(() => {
      fireEvent.keyUp(thirdOption, { key: "ArrowDown", code: 40 });
    });
    expect(document.activeElement).toEqual(firstOption);
  });

  it("should focus on previous row on arrow up press: last row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const thirdOption = getByTestId("option-row-2");
    const secondOption = getByTestId("option-row-1");
    act(() => {
      fireEvent.keyUp(thirdOption, { key: "ArrowUp", code: 38 });
    });
    expect(document.activeElement).toEqual(secondOption);
  });

  it("should focus on previous row on arrow down press: middle row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const secondOption = getByTestId("option-row-1");
    const firstOption = getByTestId("option-row-0");
    act(() => {
      fireEvent.keyUp(secondOption, { key: "ArrowUp", code: 38 });
    });
    expect(document.activeElement).toEqual(firstOption);
  });

  it("should focus on last row on arrow down press: first row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const firstOption = getByTestId("option-row-0");
    const thirdOption = getByTestId("option-row-2");
    act(() => {
      fireEvent.keyUp(firstOption, { key: "ArrowUp", code: 38 });
    });
    expect(document.activeElement).toEqual(thirdOption);
  });

  it("should add row background onmouseover", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const secondOption = getByTestId("option-row-1");
    fireEvent.mouseOver(secondOption);
    expect(secondOption.style.backgroundColor).not.toEqual("");
  });

  it("should remove row background onmouseout", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <Options options={optionsArr} chooseOption={mockCallBack} />
    );
    const secondOption = getByTestId("option-row-1");
    fireEvent.mouseOut(secondOption);
    expect(secondOption.style.backgroundColor).toEqual("");
  });
});
