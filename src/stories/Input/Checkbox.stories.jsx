// Checkbox.Stories.jsx

import React from "react";

import { Checkbox } from "./Checkbox";

export default {
  title: "Design System/Input/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Checkbox",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Checkbox",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Checkbox",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Checkbox",
};
