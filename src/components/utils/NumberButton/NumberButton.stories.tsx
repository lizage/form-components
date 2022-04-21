import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NumberButton from "./NumberButton";

export default {
  title: "FormComponents/Utils",
  component: NumberButton,
} as ComponentMeta<typeof NumberButton>;

const Template: ComponentStory<typeof NumberButton> = (args) => (
  <NumberButton {...args} />
);

export const PlusNumberButton = Template.bind({});

PlusNumberButton.args = {
  onClick: () => console.log("Button was Clicked"),
  type: "plus",
};

export const MinusNumberButton = Template.bind({});

MinusNumberButton.args = {
  onClick: () => console.log("Button was Clicked"),
  type: "minus",
};
