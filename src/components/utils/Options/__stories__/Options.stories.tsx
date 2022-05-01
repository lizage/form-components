import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Options from "../Options";

export default {
  title: "FormComponents/Utils",
  component: Options,
} as ComponentMeta<typeof Options>;

const Template: ComponentStory<typeof Options> = (args) => (
  <Options {...args} />
);

export const AllOptions = Template.bind({});

AllOptions.args = {
  chooseOption: () => console.log("Option was chosen"),
  options: ["111", "222", "333"],
  maxWidth: 250,
};
