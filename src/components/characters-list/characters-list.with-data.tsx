import React from "react";
import CharactersList from "./characters-list.component";
import { useQuery } from "../../utils/useGraphQL";
import CharactersQuery, {
  CharactersQueryResultsType,
  CharactersQueryVariablesType,
} from "../../graphql/queries/characters.query";

const CharactersListWithData = (): React.ReactElement => {
  const { data, loading } = useQuery<
    CharactersQueryResultsType,
    CharactersQueryVariablesType
  >(CharactersQuery, {
    variables: { page: 1 },
  });

  return (
    <CharactersList
      loading={loading}
      characters={data?.characters.results || []}
    />
  );
};

export default CharactersListWithData;
