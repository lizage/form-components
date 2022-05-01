import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchInput from "../SearchInput";

export default {
  title: "FormComponents/SearchInput",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const EmptySearchInput = Template.bind({});

EmptySearchInput.args = {
  onChange: () => console.log("value has changed"),
  value: "",
  placeholder: "please type to search",
  maxWidth: 300,
  theme: {
    fontColor: "#666",
    borderColor: "#ccc",
    buttonFontColor: "#999",
    buttonIconColor: "#bfbfbf",
    brightColor: "#2c89ca",
    delicateColor: "#2c89ca1a",
    focusedColor: "#fcaf66b3",
    focusedFontColor: "#fff",
    fontFamily: "Arial, sans-serif",
    direction: "rtl",
    fontSize: "1.6rem",
    borderRadius: "0.5rem",
    dropListZIndex: 1,
  },
};

export const FilledSearchInput = Template.bind({});

FilledSearchInput.args = {
  onChange: () => console.log("value has changed"),
  value: "some text added",
  placeholder: "please type to search",
  maxWidth: 300,
  theme: {
    fontColor: "#666",
    borderColor: "#ccc",
    buttonFontColor: "#999",
    buttonIconColor: "#bfbfbf",
    brightColor: "#2c89ca",
    delicateColor: "#2c89ca1a",
    focusedColor: "#fcaf66b3",
    focusedFontColor: "#fff",
    fontFamily: "Arial, sans-serif",
    direction: "rtl",
    fontSize: "1.6rem",
    borderRadius: "0.5rem",
    dropListZIndex: 1,
  },
};
