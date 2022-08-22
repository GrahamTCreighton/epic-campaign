// Form.Stories.jsx

import React from "react";

import { Form } from "./Form";

export default {
  title: "Design System/Input/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Form",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Form",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Form",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Form",
};
