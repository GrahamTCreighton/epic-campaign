// PaginationTab.Stories.jsx

import React from "react";

import { PaginationTab } from "./PaginationTab";

export default {
  title: "Design System/Controls/Pagination Tab",
  component: PaginationTab,
};

const Template = (args) => <PaginationTab {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "PaginationTab",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "PaginationTab",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "PaginationTab",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "PaginationTab",
};
