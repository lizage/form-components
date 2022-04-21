import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import OpenButton from "./OpenButton";

export default {
  title: "FormComponents/Utils",
  component: OpenButton,
} as ComponentMeta<typeof OpenButton>;

const Template: ComponentStory<typeof OpenButton> = (args) => (
  <OpenButton {...args} />
);

export const ClosedOpenButton = Template.bind({});

ClosedOpenButton.args = {
  onClick: () => console.log("Button was Clicked"),
  isOpen: false,
};

export const OpenOpenButton = Template.bind({});

OpenOpenButton.args = {
  onClick: () => console.log("Button was Clicked"),
  isOpen: true,
};
