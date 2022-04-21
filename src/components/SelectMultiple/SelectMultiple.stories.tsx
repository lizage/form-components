import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectMultiple from "./SelectMultiple";

export default {
  title: "FormComponents/SelectMultiple",
  component: SelectMultiple,
} as ComponentMeta<typeof SelectMultiple>;

const Template: ComponentStory<typeof SelectMultiple> = (args) => (
  <SelectMultiple {...args} />
);

export const AllSelectMultiple = Template.bind({});

AllSelectMultiple.args = {
  onChange: () => console.log("option was chosen"),
  options: ["111", "222", "333"],
  chosenOptions: ["111"],
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
