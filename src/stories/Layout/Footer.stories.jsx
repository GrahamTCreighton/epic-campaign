// Footer.Stories.jsx

import React from "react";

import { Footer } from "./Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Footer",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Footer",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Footer",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Footer",
};
