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

  it("should call chooseOption when a row checkbox is changed", () => {
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
    const secondOption = getByTestId("multiple-option-row-1");
    const checkbox = secondOption.getElementsByTagName("input")[0];
    act(() => {
      fireEvent.click(checkbox, {
        target: { checked: true },
      });
    });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

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
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={[]}
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

    expect(document.activeElement).toEqual(
      secondOption.getElementsByTagName("input")[0]
    );
  });

  it("should focus on next row on arrow down press: middle row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={[]}
        chooseOption={mockCallBack}
      />
    );
    const secondOption = getByTestId("multiple-option-row-1");
    const thirdOption = getByTestId("multiple-option-row-2");
    act(() => {
      fireEvent.keyUp(secondOption, {
        key: "ArrowDown",
        code: 40,
      });
    });

    expect(document.activeElement).toEqual(
      thirdOption.getElementsByTagName("input")[0]
    );
  });

  it("should focus back on first row on arrow down press: last row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={[]}
        chooseOption={mockCallBack}
      />
    );
    const thirdOption = getByTestId("multiple-option-row-2");
    const firstOption = getByTestId("multiple-option-row-0");
    act(() => {
      fireEvent.keyUp(thirdOption, {
        key: "ArrowDown",
        code: 40,
      });
    });

    expect(document.activeElement).toEqual(
      firstOption.getElementsByTagName("input")[0]
    );
  });

  it("should focus on previous row on arrow up press: last row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={[]}
        chooseOption={mockCallBack}
      />
    );
    const thirdOption = getByTestId("multiple-option-row-2");
    const secondOption = getByTestId("multiple-option-row-1");
    act(() => {
      fireEvent.keyUp(thirdOption, {
        key: "ArrowUp",
        code: 38,
      });
    });

    expect(document.activeElement).toEqual(
      secondOption.getElementsByTagName("input")[0]
    );
  });

  it("should focus on previous row on arrow down press: middle row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={[]}
        chooseOption={mockCallBack}
      />
    );
    const secondOption = getByTestId("multiple-option-row-1");
    const firstOption = getByTestId("multiple-option-row-0");
    act(() => {
      fireEvent.keyUp(secondOption, {
        key: "ArrowUp",
        code: 38,
      });
    });

    expect(document.activeElement).toEqual(
      firstOption.getElementsByTagName("input")[0]
    );
  });

  it("should focus on last row on arrow down press: first row", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={[]}
        chooseOption={mockCallBack}
      />
    );
    const firstOption = getByTestId("multiple-option-row-0");
    const thirdOption = getByTestId("multiple-option-row-2");
    act(() => {
      fireEvent.keyUp(firstOption, {
        key: "ArrowUp",
        code: 38,
      });
    });

    expect(document.activeElement).toEqual(
      thirdOption.getElementsByTagName("input")[0]
    );
  });

  it("should add row background onmouseover", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={[]}
        chooseOption={mockCallBack}
      />
    );
    const secondOption = getByTestId("multiple-option-row-1");
    fireEvent.mouseOver(secondOption);
    expect(secondOption.style.backgroundColor).not.toEqual("");
  });

  it("should remove row background onmouseout", () => {
    const mockCallBack = jest.fn();
    const optionsArr = ["111", "222", "333"];
    const { getByTestId } = render(
      <OptionsMultiple
        options={optionsArr}
        chosenOptions={[]}
        chooseOption={mockCallBack}
      />
    );
    const secondOption = getByTestId("multiple-option-row-1");
    fireEvent.mouseOut(secondOption);
    expect(secondOption.style.backgroundColor).toEqual("");
  });
});
