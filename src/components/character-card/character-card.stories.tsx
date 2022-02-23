import React from "react";
import CharacterCard from "./character-card.component";
import CharacterCardLoading from "./character-card.loading";

export default {
  title: "Storybook/CharacterCard",
  component: CharacterCard,
};

export const Alive = (): React.ReactElement => (
  <CharacterCard
    character={{
      id: "1",
      name: "Rick Sanchez",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    }}
  />
);

export const Dead = (): React.ReactElement => (
  <CharacterCard
    character={{
      id: "9",
      name: "Agency Director",
      status: "Dead",
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    }}
  />
);

export const Unknown = (): React.ReactElement => (
  <CharacterCard
    character={{
      id: "14",
      name: "Alien Morty",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
    }}
  />
);

export const Loading = (): React.ReactElement => <CharacterCardLoading />;
