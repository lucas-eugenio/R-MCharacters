import React from "react";
import StatusPill from "./status-pill.component";

export default {
  title: "Storybook/StatusPill",
  component: StatusPill,
};

export const Alive = (): React.ReactElement => <StatusPill status="Alive" />;

export const Dead = (): React.ReactElement => <StatusPill status="Dead" />;

export const Unknown = (): React.ReactElement => (
  <StatusPill status="unknown" />
);
