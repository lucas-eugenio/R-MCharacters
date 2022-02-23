import { gql } from "../../utils/useGraphQL";
import EpisodeFragment, { EpisodeType } from "./episode.fragment";

const DetailedCharacterFragment = gql`
  fragment DetailedCharacterFragment on Character {
    id
    name
    image
    species
    gender
    origin {
      name
    }
    location {
      name
    }
    episode {
      ...EpisodeFragment
    }
  }
  ${EpisodeFragment}
`;

export interface DetailedCharacterType {
  id: string;
  name: string;
  image: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  episode: EpisodeType[];
}

export default DetailedCharacterFragment;
