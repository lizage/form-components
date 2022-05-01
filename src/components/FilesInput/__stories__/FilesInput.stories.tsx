import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilesInput from "../FilesInput";

export default {
  title: "FormComponents/FilesInput",
  component: FilesInput,
} as ComponentMeta<typeof FilesInput>;

const Template: ComponentStory<typeof FilesInput> = (args) => (
  <FilesInput {...args} />
);

export const AllFilesInput = Template.bind({});

AllFilesInput.args = {
  onChange: () => console.log("file was added"),
  placeholder: "click to add a file",
  singleLabel: "one file added",
  multipleLabel: "more files added",
  maxFiles: 5,
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
