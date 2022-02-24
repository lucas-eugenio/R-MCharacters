import React from "react";
import { TextContainer, CardContainer } from "./character-card.styled";
import Card from "../card/card.styled";
import { ImgShimmer, TextShimmer } from "../shimmer/shimmer.styled";

const IMG_SIZE = "80px";

const CharacterCardLoading = (): React.ReactElement => (
  <Card>
    <CardContainer>
      <ImgShimmer size={IMG_SIZE} />
      <TextContainer>
        <TextShimmer />
        <TextShimmer />
      </TextContainer>
    </CardContainer>
  </Card>
);

export default CharacterCardLoading;
