import { gql } from "../../utils/useGraphQL";
import DetailedCharacterFragment, {
  DetailedCharacterType,
} from "../fragments/detailed-character.fragment";

const CharacterQuery = gql`
  query CharacterQuery($characterId: ID!) {
    character(id: $characterId) {
      ...DetailedCharacterFragment
    }
  }
  ${DetailedCharacterFragment}
`;

export default CharacterQuery;

export interface CharacterQueryVariablesType {
  characterId: string | number;
}

export interface CharacterQueryResultsType {
  character: DetailedCharacterType;
}
