import React from "react";
import StatusPill from "../status-pill/status-pill.component";
import { ListCharacterType } from "../../graphql/fragments/list-character.fragment";
import {
  CardContainer,
  NameText,
  CharacterImg,
  TextContainer,
} from "./character-card.styled";
import Card from "../card/card.styled";

interface CharacterCardProps {
  character: ListCharacterType;
  hasHover?: boolean;
}

const IMG_SIZE = "80px";

const CharacterCard = ({
  character,
  hasHover,
}: CharacterCardProps): React.ReactElement => {
  return (
    <Card hasHover={hasHover}>
      <CardContainer>
        <CharacterImg src={character.image} alt="" size={IMG_SIZE} />
        <TextContainer>
          <NameText>{character.name}</NameText>
          <StatusPill status={character.status} />
        </TextContainer>
      </CardContainer>
    </Card>
  );
};

export default CharacterCard;
