import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioButtons from "./RadioButtons";

export default {
  title: "FormComponents/RadioButtons",
  component: RadioButtons,
} as ComponentMeta<typeof RadioButtons>;

const Template: ComponentStory<typeof RadioButtons> = (args) => (
  <RadioButtons {...args} />
);

export const HorizontalRadioButtons = Template.bind({});

HorizontalRadioButtons.args = {
  onChange: () => console.log("radio buttons was clicked"),
  options: ["111", "222", "333"],
  currentOption: "111",
  maxWidth: 300,
  isVertical: false,
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

export const VerticalRadioButtons = Template.bind({});

VerticalRadioButtons.args = {
  onChange: () => console.log("radio buttons was clicked"),
  options: ["111", "222", "333"],
  currentOption: "111",
  maxWidth: 300,
  isVertical: true,
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
