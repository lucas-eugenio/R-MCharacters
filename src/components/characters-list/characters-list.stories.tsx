import { action } from "@storybook/addon-actions";
import React from "react";
import CharactersList from "./characters-list.component";

export default {
  title: "Storybook/CharactersList",
  component: CharactersList,
};

const characters = [
  {
    id: "1",
    name: "Rick Sanchez",
    status: "Alive" as const,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: "9",
    name: "Agency Director",
    status: "Dead" as const,
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  },
  {
    id: "14",
    name: "Alien Morty",
    status: "unknown" as const,
    image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  },
];

const pageProps = {
  currPage: 1,
  pageInfo: { pages: 1 },
  onPrevClick: () => action("Prev Click"),
  onNextClick: () => action("Prev Click"),
};

export const Default = (): React.ReactElement => (
  <CharactersList characters={characters} loading={false} {...pageProps} />
);

export const Loading = (): React.ReactElement => (
  <CharactersList characters={[]} loading {...pageProps} />
);
