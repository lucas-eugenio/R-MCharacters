import React from "react";
import { BaseRouter } from "../../utils/useRouter";
import Header from "./header.component";

export default {
  title: "Storybook/Header",
  component: Header,
};

export const Default = (): React.ReactElement => (
  <BaseRouter>
    <Header />
  </BaseRouter>
);
