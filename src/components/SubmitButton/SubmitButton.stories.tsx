import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SubmitButton from "./SubmitButton";

export default {
  title: "FormComponents/SubmitButton",
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
);

export const AllSubmitButton = Template.bind({});

AllSubmitButton.args = {
  onClick: () => console.log("button was clicked"),
  value: "click me",
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
