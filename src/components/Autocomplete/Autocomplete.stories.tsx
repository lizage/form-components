import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Autocomplete from "./Autocomplete";

export default {
  title: "FormComponents/Autocomplete",
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);

export const AllAutocomplete = Template.bind({});

AllAutocomplete.args = {
  onChange: () => console.log("option was chosen"),
  options: ["111", "222", "333"],
  value: "",
  minChars: 3,
  maxWidth: 300,
  placeholder: "please type here",
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
