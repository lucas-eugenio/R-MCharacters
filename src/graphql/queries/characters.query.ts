import { gql } from "../../utils/useGraphQL";
import ListCharacterFragment, {
  ListCharacterType,
} from "../fragments/list-character.fragment";
import InfoFragment, { InfoType } from "../fragments/info.fragment";

const CharactersQuery = gql`
  query CharactersQuery($page: Int) {
    characters(page: $page) {
      info {
        ...InfoFragment
      }
      results {
        ...ListCharacterFragment
      }
    }
  }
  ${InfoFragment}
  ${ListCharacterFragment}
`;

export default CharactersQuery;

export interface CharactersQueryVariablesType {
  page?: number;
}

export interface CharactersQueryResultsType {
  characters: {
    info: InfoType;
    results: ListCharacterType;
  };
}
