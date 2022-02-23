import React, { Fragment } from "react";
import { InfoType } from "../../graphql/fragments/info.fragment";
import { ListCharacterType } from "../../graphql/fragments/list-character.fragment";
import CharacterCard from "../character-card/character-card.component";
import CharacterCardLoading from "../character-card/character-card.loading";
import { Paginator } from "../paginator/paginator.component";
import {
  TitleContainer,
  ListContainer,
  ListTitle,
} from "./characters-list.styled";

interface CharactersListProps {
  characters: ListCharacterType[];
  loading: boolean;
  currPage: number;
  pageInfo: InfoType;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const CharactersList = ({
  characters,
  loading,
  currPage,
  pageInfo,
  onNextClick,
  onPrevClick,
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
      <TitleContainer>
        <ListTitle>Lista de Personagens</ListTitle>
        <Paginator
          currPage={currPage}
          pageInfo={pageInfo}
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
          loading={loading}
        />
      </TitleContainer>
      <ListContainer>
        <Content />
      </ListContainer>
    </Fragment>
  );
};

export default CharactersList;
