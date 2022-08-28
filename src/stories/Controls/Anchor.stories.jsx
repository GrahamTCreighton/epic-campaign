// Anchor.Stories.jsx

import React from "react";

import { Anchor } from "components/Controls/Anchor";

export default {
  title: "Design System/Controls/Anchor",
  component: Anchor,
};

const Template = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Anchor",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Anchor",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Anchor",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Anchor",
};
