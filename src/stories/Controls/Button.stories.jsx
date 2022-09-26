import React from "react";
import { Button } from "components/Controls/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Controls/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const DefaultDefault = Template.bind({});
DefaultDefault.args = {
  theme: "defaultDefault",
  label: "Default Default",
};

export const DefaultPrimary = Template.bind({});
DefaultPrimary.args = {
  theme: "defaultPrimary",
  label: "Default Primary",
};

export const DefaultSecondary = Template.bind({});
DefaultSecondary.args = {
  theme: "defaultSecondary",
  label: "Default Secondary",
};

export const DefaultHighlight = Template.bind({});
DefaultHighlight.args = {
  theme: "defaultHighlight",
  label: "Default Highlight",
};

export const PrimaryFill = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryFill.args = {
  theme: "primary",
  label: "Primary Fill",
};

export const SecondaryFill = Template.bind({});
SecondaryFill.args = {
  theme: "secondaryFill",
  label: "Secondary Fill",
};

export const SuccessFill = Template.bind({});
SuccessFill.args = {
  theme: "success",
  label: "Success Fill",
};

export const DangerFill = Template.bind({});
DangerFill.args = {
  theme: "danger",
  label: "Danger Fill",
};

export const WarningFill = Template.bind({});
WarningFill.args = {
  theme: "warning",
  label: "Warning Fill",
};

export const InfoFill = Template.bind({});
InfoFill.args = {
  theme: "fillInfo",
  label: "Info Fill",
};

export const OutlineDefault = Template.bind({});
OutlineDefault.args = {
  theme: "outlineDefault",
  label: "Outline Default",
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  theme: "outlinePrimary",
  label: "Outline Primary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
};
