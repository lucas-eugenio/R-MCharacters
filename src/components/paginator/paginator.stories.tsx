import React from "react";
import { Paginator } from "./paginator.component";
import { action } from "@storybook/addon-actions";

export default {
  title: "Storybook/Paginator",
  component: Paginator,
};

const handleClick = (page: number): void => {
  action(`Go To Page ${page}`);
};

export const WithSinglePage = (): React.ReactElement => (
  <Paginator
    currPage={1}
    pageInfo={{
      pages: 1,
    }}
    onRouteChange={handleClick}
  />
);

export const WithTwoPages = (): React.ReactElement => (
  <Paginator
    currPage={1}
    pageInfo={{
      pages: 2,
      next: 1,
    }}
    onRouteChange={handleClick}
  />
);

export const WithThreePages = (): React.ReactElement => (
  <Paginator
    currPage={2}
    pageInfo={{
      pages: 3,
      prev: 1,
      next: 3,
    }}
    onRouteChange={handleClick}
  />
);

export const Loading = (): React.ReactElement => (
  <Paginator
    currPage={1}
    pageInfo={{
      pages: 1,
    }}
    loading
    onRouteChange={handleClick}
  />
);
