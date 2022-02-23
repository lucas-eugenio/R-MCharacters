import React from "react";
import { Paginator } from "./paginator.component";
import { action } from "@storybook/addon-actions";

export default {
  title: "Storybook/Paginator",
  component: Paginator,
};

const handlePrevClick = (): void => {
  action("Prev Click");
};

const handleNextClick = (): void => {
  action("Next Click");
};

export const WithSinglePage = (): React.ReactElement => (
  <Paginator
    currPage={1}
    pageInfo={{
      pages: 1,
    }}
    onPrevClick={handlePrevClick}
    onNextClick={handleNextClick}
  />
);

export const WithTwoPages = (): React.ReactElement => (
  <Paginator
    currPage={1}
    pageInfo={{
      pages: 2,
      next: 1,
    }}
    onPrevClick={handlePrevClick}
    onNextClick={handleNextClick}
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
    onPrevClick={handlePrevClick}
    onNextClick={handleNextClick}
  />
);

export const Loading = (): React.ReactElement => (
  <Paginator
    currPage={1}
    pageInfo={{
      pages: 1,
    }}
    onPrevClick={handlePrevClick}
    onNextClick={handleNextClick}
    loading
  />
);
