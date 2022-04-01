import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import OptionsMultiple from "../OptionsMultiple";

describe("OptionsMultiple", () => {
  Element.prototype.scrollTo = () => {};

  it("should render the Options component", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const chosenOptionsArr = ["111"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={chosenOptionsArr}
        chooseOption={mockCallBack}
      />
    );
    const options = getByTestId("multiple-options-list");
    expect(options).toBeTruthy();
  });

  // it("should call chooseOption when a row checkbox is changed", () => {});

  it("should focus on first row right after mount", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const chosenOptionsArr = ["111"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={chosenOptionsArr}
        chooseOption={mockCallBack}
      />
    );
    const firstOption = getByTestId("multiple-option-row-0");
    expect(document.activeElement).toEqual(
      firstOption.getElementsByTagName("input")[0]
    );
  });

  it("should focus on next row on arrow down press: first row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const chosenOptionsArr = ["111"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={chosenOptionsArr}
        chooseOption={mockCallBack}
      />
    );
    const firstOption = getByTestId("multiple-option-row-0");
    const secondOption = getByTestId("multiple-option-row-1");
    act(() => {
      fireEvent.keyUp(firstOption, {
        key: "ArrowDown",
        code: 40,
      });
    });
    console.log(document.activeElement);
    expect(document.activeElement).not.toEqual(
      secondOption.getElementsByTagName("input")[0]
    );
  });

  // it("should focus on next row on arrow down press: middle row", () => {});

  // it("should focus back on first row on arrow down press: last row", () => {});

  // it("should focus on previous row on arrow up press: last row", () => {});

  // it("should focus on previous row on arrow down press: middle row", () => {});

  // it("should focus on last row on arrow down press: first row", () => {});

  // it("should add row background onmouseover", () => {});

  // it("should remove row background onmouseout", () => {});
});
