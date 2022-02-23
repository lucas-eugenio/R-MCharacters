import React from "react";
import { ListCharacterType } from "../../graphql/fragments/list-character.fragment";
import {
  Card,
  NameText,
  AlivePill,
  CharacterImg,
  TextContainer,
  DeadPill,
  UnknownPill,
} from "./character-card.styled";

interface CharacterCardProps {
  character: ListCharacterType;
}

const CharacterCard = ({
  character,
}: CharacterCardProps): React.ReactElement => {
  const Pill = (): React.ReactElement => {
    switch (character.status) {
      case "Alive":
        return <AlivePill>{character.status}</AlivePill>;
      case "Dead":
        return <DeadPill>{character.status}</DeadPill>;
      default:
        return <UnknownPill>{character.status}</UnknownPill>;
    }
  };

  return (
    <Card>
      <CharacterImg src={character.image} alt="" />
      <TextContainer>
        <NameText>{character.name}</NameText>
        <Pill />
      </TextContainer>
    </Card>
  );
};

export default CharacterCard;
