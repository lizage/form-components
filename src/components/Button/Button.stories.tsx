import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "FormComponents/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  onClick: () => console.log("Primary button was clicked"),
  children: "I'm an important button",
  id: "button_1",
  use: "primary",
  maxWidth: 250,
  "aria-label": "primary button",
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

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  onClick: () => console.log("Secondary button was clicked"),
  children: "I'm a simple button",
  id: "button_2",
  use: "secondary",
  maxWidth: 250,
  "aria-label": "secondary button",
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
