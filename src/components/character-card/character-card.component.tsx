import React from "react";
import StatusPill from "../status-pill/status-pill.component";
import { ListCharacterType } from "../../graphql/fragments/list-character.fragment";
import {
  Card,
  NameText,
  CharacterImg,
  TextContainer,
} from "./character-card.styled";

interface CharacterCardProps {
  character: ListCharacterType;
}

const CharacterCard = ({
  character,
}: CharacterCardProps): React.ReactElement => {
  return (
    <Card>
      <CharacterImg src={character.image} alt="" />
      <TextContainer>
        <NameText>{character.name}</NameText>
        <StatusPill status={character.status} />
      </TextContainer>
    </Card>
  );
};

export default CharacterCard;
