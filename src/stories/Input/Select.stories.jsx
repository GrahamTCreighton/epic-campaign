// Select.Stories.jsx

import React from "react";

import { Select } from "components/Input/Select";

export default {
  title: "Design System/Input/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Select",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Select",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Select",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Select",
};
