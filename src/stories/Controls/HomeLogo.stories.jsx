// HomeLogo.Stories.jsx

import React from "react";

import { HomeLogo } from "./HomeLogo";

export default {
  title: "Design System/Controls/Home Logo",
  component: HomeLogo,
};

const Template = (args) => <HomeLogo {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "HomeLogo",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "HomeLogo",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "HomeLogo",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "HomeLogo",
};
