import React from "react";
import { DetailedCharacterType } from "../../graphql/fragments/detailed-character.fragment";
import {
  ListItem,
  TitleText,
  DetailedImg,
  BoldDataText,
  DataContainer,
  UnorderedList,
  ContentContainer,
  CardWithMaxHeight,
  EpisodesContainer,
} from "./character-detail.styled";

interface CharacterDetailProps {
  character: DetailedCharacterType;
}

const CharacterDetail = ({
  character,
}: CharacterDetailProps): React.ReactElement => {
  return (
    <CardWithMaxHeight>
      <ContentContainer>
        <DataContainer>
          <TitleText>{character.name}</TitleText>
          <DetailedImg src={character.image} alt="" />
          <BoldDataText>{character.species}</BoldDataText>
          <BoldDataText>{character.gender}</BoldDataText>
          <BoldDataText>{`From ${character.origin.name}`}</BoldDataText>
          <BoldDataText>{`In ${character.location.name}`}</BoldDataText>
        </DataContainer>
        <EpisodesContainer>
          <TitleText>Episodes</TitleText>
          <UnorderedList>
            {character.episode.map((ep) => (
              <ListItem>{`${ep.episode}: ${ep.name}`}</ListItem>
            ))}
          </UnorderedList>
        </EpisodesContainer>
      </ContentContainer>
    </CardWithMaxHeight>
  );
};

export default CharacterDetail;
