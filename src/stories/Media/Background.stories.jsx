// Background.Stories.jsx

import React from "react";

import { Background } from "./Background";

export default {
  title: "Media/Images/Background",
  component: Background,
};

const Template = (args) => <Background {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Background",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Background",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Background",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Background",
};
