import React from "react";
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
} from "./character-detail.styled";
import StatusPill from "../status-pill/status-pill.component";

interface CharacterDetailProps {
  character: DetailedCharacterType;
}

interface DataItemProps {
  regularText: string;
  boldText: string;
}

const CharacterDetail = ({
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

  return (
    <CardWithColor>
      <TitleText>{character.name}</TitleText>
      <InformationContainer>
        <ImgWrapper>
          <DetailedImg src={character.image} alt="" />
        </ImgWrapper>
        <TextContainer>
          <StatusContainer>
            <StatusText>Status:</StatusText>
            <StatusPill status={character.status} />
          </StatusContainer>
          <DataItem regularText="Species" boldText={character.species} />
          <DataItem regularText="Gender" boldText={character.gender} />
          <DataItem regularText="Origin" boldText={character.origin.name} />
          <DataItem regularText="Location" boldText={character.location.name} />
        </TextContainer>
      </InformationContainer>
      <Divider />
      <TitleText>Episodes</TitleText>
      <UnorderedList>
        {character.episode.map((ep) => (
          <ListItem>
            {`[${ep.episode}] `}
            <b>{ep.name}</b>
          </ListItem>
        ))}
      </UnorderedList>
    </CardWithColor>
  );
};

export default CharacterDetail;
