import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import OptionsMultiple from "./OptionsMultiple";

export default {
  title: "FormComponents/Utils/OptionsMultiple",
  component: OptionsMultiple,
} as ComponentMeta<typeof OptionsMultiple>;

const Template: ComponentStory<typeof OptionsMultiple> = (args) => (
  <OptionsMultiple {...args} />
);

export const AllOptionsMultiple = Template.bind({});

AllOptionsMultiple.args = {
  chooseOption: () => console.log("Option was chosen"),
  options: ["111", "222", "333"],
  chosenOptions: [],
  maxWidth: 250,
};
