// FileUpload.Stories.jsx

import React from "react";

import { FileUpload } from "components/Input/FileUpload";

export default {
  title: "Design System/Input/File Upload",
  component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "FileUpload",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "FileUpload",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "FileUpload",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "FileUpload",
};
