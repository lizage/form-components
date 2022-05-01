import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SelectMultiple from "../SelectMultiple";

describe("SelectMultiple", () => {
  it("should render the SelectMultiple component", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <SelectMultiple
        chosenOptions={[]}
        onChange={mockCallBack}
        options={["111", "222", "333"]}
        placeholder={"please choose some options"}
        singleLabel={"One option was chosen"}
        multipleLabel={"More options were chosen"}
      />
    );
    const select = getByTestId("select-multiple");
    expect(select).toBeTruthy();
  });

  it("should call onChange when option is chosen", () => {});

  it("should show options component when open", () => {});

  it("should hide options component when closed", () => {});

  it("should hide options component on blur", () => {});

  it("should show placeholder when no option is chosen", () => {});

  it("should show single option label when one option is chosen", () => {});

  it("should show multiple options label when more than one option is chosen", () => {});
});
