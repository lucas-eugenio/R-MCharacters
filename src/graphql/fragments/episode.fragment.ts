import { gql } from "../../utils/useGraphQL";

const EpisodeFragment = gql`
  fragment EpisodeFragment on Episode {
    id
    name
    episode
  }
`;

export interface EpisodeType {
  id: string;
  name: string;
  episode: string;
}

export default EpisodeFragment;
