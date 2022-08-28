// InputTextArea.Stories.jsx

import React from "react";

import { InputTextArea } from "components/Input/InputTextArea";

export default {
  title: "Design System/Input/Input Text Area",
  component: InputTextArea,
};

const Template = (args) => <InputTextArea {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "InputTextArea",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "InputTextArea",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "InputTextArea",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "InputTextArea",
};
