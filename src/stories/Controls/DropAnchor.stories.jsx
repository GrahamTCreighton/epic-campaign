// DropAnchor.Stories.jsx

import React from "react";

import { DropAnchor } from "components/Controls/DropAnchor";

export default {
  title: "Design System/Controls/Drop Anchor",
  component: DropAnchor,
};

const Template = (args) => <DropAnchor {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "DropAnchor",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "DropAnchor",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "DropAnchor",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "DropAnchor",
};
