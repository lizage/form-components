import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "FormComponents/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const EmptySelect = Template.bind({});

EmptySelect.args = {
  onChange: () => console.log("option was chosen"),
  options: ["111", "222", "333"],
  value: "",
  maxWidth: 300,
  placeholder: "please choose an option",
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

export const FilledSelect = Template.bind({});

FilledSelect.args = {
  onChange: () => console.log("option was chosen"),
  options: ["111", "222", "333"],
  value: "111",
  maxWidth: 300,
  placeholder: "please choose an option",
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
