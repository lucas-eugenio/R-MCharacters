import React from "react";
import {
  Card,
  ImgShimmer,
  TextShimmer,
  TextContainer,
} from "./character-card.styled";

const CharacterCardLoading = (): React.ReactElement => (
  <Card>
    <ImgShimmer />
    <TextContainer>
      <TextShimmer />
      <TextShimmer />
    </TextContainer>
  </Card>
);

export default CharacterCardLoading;
