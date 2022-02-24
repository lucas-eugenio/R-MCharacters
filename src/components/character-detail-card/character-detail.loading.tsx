import React from "react";
import {
  Divider,
  ImgWrapper,
  InformationContainer,
  TextContainer,
} from "./character-detail-card.styled";
import { TextShimmer, SquaredImgShimmer } from "../shimmer/shimmer.styled";
import Card from "../card/card.styled";

const CharacterDetailLoading = (): React.ReactElement => {
  return (
    <Card>
      <TextShimmer />
      <InformationContainer>
        <ImgWrapper>
          <SquaredImgShimmer />
        </ImgWrapper>
        <TextContainer>
          <TextShimmer />
          <TextShimmer />
          <TextShimmer />
          <TextShimmer />
          <TextShimmer />
        </TextContainer>
      </InformationContainer>
      <Divider />
      <TextShimmer />
      <TextShimmer />
      <TextShimmer />
      <TextShimmer />
      <TextShimmer />
      <TextShimmer />
      <TextShimmer />
      <TextShimmer />
    </Card>
  );
};

export default CharacterDetailLoading;
