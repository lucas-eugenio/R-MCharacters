import React, { Fragment } from "react";
import { DetailedCharacterType } from "../../graphql/fragments/detailed-character.fragment";
import {
  ListItem,
  TitleText,
  DetailedImg,
  UnorderedList,
  CardWithColor,
  InformationContainer,
  TextContainer,
  ImgWrapper,
  DataText,
  StatusContainer,
  StatusText,
  Divider,
} from "./character-detail-card.styled";
import StatusPill from "../status-pill/status-pill.component";
import translations from "../../constants/translations";

interface CharacterDetailProps {
  character?: DetailedCharacterType;
}

interface DataItemProps {
  regularText: string;
  boldText: string;
}

const CharacterDetailCard = ({
  character,
}: CharacterDetailProps): React.ReactElement => {
  const DataItem = ({
    regularText,
    boldText,
  }: DataItemProps): React.ReactElement => {
    return (
      <DataText>
        {`${regularText}: `}
        <b>{boldText}</b>
      </DataText>
    );
  };

  if (!character) {
    return <Fragment />;
  }

  return (
    <CardWithColor>
      <TitleText>{character.name}</TitleText>
      <InformationContainer>
        <ImgWrapper>
          <DetailedImg src={character.image} alt="" />
        </ImgWrapper>
        <TextContainer>
          <StatusContainer>
            <StatusText>{`${translations.characterDetail.status}:`}</StatusText>
            <StatusPill status={character.status} />
          </StatusContainer>
          <DataItem
            regularText={translations.characterDetail.species}
            boldText={character.species}
          />
          <DataItem
            regularText={translations.characterDetail.gender}
            boldText={character.gender}
          />
          <DataItem
            regularText={translations.characterDetail.origin}
            boldText={character.origin.name}
          />
          <DataItem
            regularText={translations.characterDetail.location}
            boldText={character.location.name}
          />
        </TextContainer>
      </InformationContainer>
      <Divider />
      <TitleText>{translations.characterDetail.episodes}</TitleText>
      <UnorderedList>
        {character.episode.map((ep) => (
          <ListItem key={ep.id}>
            {`[${ep.episode}] `}
            <b>{ep.name}</b>
          </ListItem>
        ))}
      </UnorderedList>
    </CardWithColor>
  );
};

export default CharacterDetailCard;
