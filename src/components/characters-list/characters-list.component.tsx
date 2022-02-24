import React, { Fragment } from "react";
import { createDetailRoute } from "../../constants/routes";
import translations from "../../constants/translations";
import { InfoType } from "../../graphql/fragments/info.fragment";
import { ListCharacterType } from "../../graphql/fragments/list-character.fragment";
import CharacterCard from "../character-card/character-card.component";
import CharacterCardLoading from "../character-card/character-card.loading";
import { Paginator } from "../paginator/paginator.component";
import {
  ListTitle,
  ListContainer,
  TitleContainer,
  LinkWithoutDecoration,
} from "./characters-list.styled";

interface CharactersListProps {
  characters: ListCharacterType[];
  loading: boolean;
  currPage: number;
  pageInfo?: InfoType;
  onRouteChange?: (page: number) => void;
}

const CharactersList = ({
  characters,
  loading,
  currPage,
  pageInfo,
  onRouteChange,
}: CharactersListProps): React.ReactElement => {
  const Content = (): React.ReactElement => {
    if (loading) {
      return (
        <Fragment>
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
          <CharacterCardLoading />
        </Fragment>
      );
    }

    return (
      <Fragment>
        {characters.map((character) => (
          <LinkWithoutDecoration
            key={character.id}
            to={createDetailRoute(character.id)}
          >
            <CharacterCard character={character} hasHover />
          </LinkWithoutDecoration>
        ))}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <TitleContainer>
        <ListTitle>{translations.charactersList.title}</ListTitle>
        <Paginator
          currPage={currPage}
          pageInfo={pageInfo}
          loading={loading}
          onRouteChange={onRouteChange}
        />
      </TitleContainer>
      <ListContainer>
        <Content />
      </ListContainer>
    </Fragment>
  );
};

export default CharactersList;
