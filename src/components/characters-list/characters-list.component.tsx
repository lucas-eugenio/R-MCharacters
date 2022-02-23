import React, { Fragment } from "react";
import { ListCharacterType } from "../../graphql/fragments/list-character.fragment";
import CharacterCard from "../character-card/character-card.component";
import CharacterCardLoading from "../character-card/character-card.loading";
import { ListContainer, ListTitle } from "./characters-list.styled";

interface CharactersListProps {
  characters: ListCharacterType[];
  loading: boolean;
}

const CharactersList = ({
  characters,
  loading,
}: CharactersListProps): React.ReactElement => {
  const Content = (): React.ReactElement => {
    if (loading) {
      return (
        <Fragment>
          {Array.from(Array(4).keys()).map((element) => (
            <CharacterCardLoading />
          ))}
        </Fragment>
      );
    }

    return (
      <Fragment>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <ListTitle>Lista de Personagens</ListTitle>
      <ListContainer>
        <Content />
      </ListContainer>
    </Fragment>
  );
};

export default CharactersList;
