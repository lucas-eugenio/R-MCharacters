import { gql } from "../../utils/useGraphQL";
import DetailedCharacterFragment, {
  DetailedCharacterType,
} from "../fragments/detailed-character.fragment";

const CharacterQuery = gql`
  query CharacterQuery($id: ID!) {
    characters(id: $id) {
      ...DetailedCharacterFragment
    }
  }
  ${DetailedCharacterFragment}
`;

export default CharacterQuery;

export interface CharacterQueryVariablesType {
  id: string;
}

export interface CharacterQueryResultsType {
  character: DetailedCharacterType;
}
