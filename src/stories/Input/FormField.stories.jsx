// FormField.Stories.jsx

import React from "react";

import { FormField } from "./FormField";

export default {
  title: "Design System/Input/Form Field",
  component: FormField,
};

const Template = (args) => <FormField {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "FormField",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "FormField",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "FormField",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "FormField",
};
