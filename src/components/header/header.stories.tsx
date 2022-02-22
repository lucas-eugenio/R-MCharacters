import React from "react";
import Header from "./header.component";
import { action } from "@storybook/addon-actions";

export default {
  title: "Storybook/Header",
  component: Header,
};

export const Default = (): React.ReactElement => (
  <Header onLogoClick={action("Logo Click")} />
);
