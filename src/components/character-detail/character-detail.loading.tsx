import React from "react";
import {
  DataContainer,
  ContentContainer,
  CardWithMaxHeight,
  EpisodesContainer,
} from "./character-detail.styled";
import { TextShimmer, ImgShimmer } from "../shimmer/shimmer.styled";
import styleSheet from "../../constants/style-sheet";

const IMG_SIZE = "200px";
const TEXT_WIDTH = "200px";

const CharacterDetailLoading = (): React.ReactElement => {
  const TextShimmerWithMargin = (): React.ReactElement => (
    <TextShimmer
      style={{ marginBottom: styleSheet.spaces.medium }}
      width={TEXT_WIDTH}
    />
  );

  return (
    <CardWithMaxHeight>
      <ContentContainer>
        <DataContainer>
          <TextShimmerWithMargin />
          <ImgShimmer
            size={IMG_SIZE}
            style={{ marginBottom: styleSheet.spaces.medium }}
          />
          {Array.from(Array(4).keys()).map((element) => (
            <TextShimmerWithMargin key={element} />
          ))}
        </DataContainer>
        <EpisodesContainer>
          {Array.from(Array(10).keys()).map((element) => (
            <TextShimmerWithMargin key={element} />
          ))}
        </EpisodesContainer>
      </ContentContainer>
    </CardWithMaxHeight>
  );
};

export default CharacterDetailLoading;
