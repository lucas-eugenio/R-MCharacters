import React from "react";
import Error from "./error.component";

export default {
  title: "Storybook/Error",
  component: Error,
};

export const WithMessage = (): React.ReactElement => (
  <Error message="The record does not exist" />
);

export const WithoutMessage = (): React.ReactElement => <Error />;
