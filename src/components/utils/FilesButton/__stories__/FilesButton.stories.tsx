import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilesButton from "../FilesButton";

export default {
  title: "FormComponents/Utils",
  component: FilesButton,
} as ComponentMeta<typeof FilesButton>;

const Template: ComponentStory<typeof FilesButton> = (args) => (
  <FilesButton {...args} />
);

export const AllFilesButton = Template.bind({});

AllFilesButton.args = {
  addFile: () => console.log("Button was Clicked"),
};
