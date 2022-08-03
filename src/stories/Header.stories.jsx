import React from "react";

import { Header } from "./Header";

export default {
  title: "Design System/Navigation/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
