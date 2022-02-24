import React from "react";
import CharacterCard from "./character-card.component";
import CharacterCardLoading from "./character-card.loading";

export default {
  title: "Storybook/CharacterCard",
  component: CharacterCard,
};

export const WithoutHover = (): React.ReactElement => (
  <CharacterCard
    character={{
      id: "1",
      name: "Rick Sanchez",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    }}
  />
);

export const WithHover = (): React.ReactElement => (
  <CharacterCard
    character={{
      id: "1",
      name: "Rick Sanchez",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    }}
    hasHover
  />
);

export const Loading = (): React.ReactElement => <CharacterCardLoading />;
