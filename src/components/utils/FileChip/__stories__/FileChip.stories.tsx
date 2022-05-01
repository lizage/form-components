import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FileChip from "../FileChip";

export default {
  title: "FormComponents/Utils",
  component: FileChip,
} as ComponentMeta<typeof FileChip>;

const Template: ComponentStory<typeof FileChip> = (args) => (
  <FileChip {...args} />
);

export const AllFileChip = Template.bind({});

AllFileChip.args = {
  showFile: () => console.log("show file"),
  removeFile: () => console.log("remove file"),
  name: "file1.jpg",
};
