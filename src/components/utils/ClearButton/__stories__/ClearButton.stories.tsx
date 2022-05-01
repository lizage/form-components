import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClearButton from "../ClearButton";

export default {
  title: "FormComponents/Utils",
  component: ClearButton,
} as ComponentMeta<typeof ClearButton>;

const Template: ComponentStory<typeof ClearButton> = (args) => (
  <ClearButton {...args} />
);

export const AllClearButton = Template.bind({});

AllClearButton.args = {
  onClick: () => console.log("button was clicked"),
};
