// TextArea.Stories.jsx

import React from "react";

import { TextArea } from "./TextArea";

export default {
  title: "Design System/Input/Text Area",
  component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "TextArea",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "TextArea",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "TextArea",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "TextArea",
};
