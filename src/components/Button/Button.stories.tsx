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
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  onClick: () => console.log("Secondary button was clicked"),
  children: "I'm a simple button",
  id: "button_2",
  use: "secondary",
  maxWidth: 150,
  "aria-label": "secondary button",
};
