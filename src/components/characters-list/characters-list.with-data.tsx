import React, { useState } from "react";
import CharactersList from "./characters-list.component";
import { useQuery } from "../../utils/useGraphQL";
import CharactersQuery, {
  CharactersQueryResultsType,
  CharactersQueryVariablesType,
} from "../../graphql/queries/characters.query";

const CharactersListWithData = (): React.ReactElement => {
  const [page, setPage] = useState(1);

  const { data, loading } = useQuery<
    CharactersQueryResultsType,
    CharactersQueryVariablesType
  >(CharactersQuery, {
    variables: { page: page },
  });

  return (
    <CharactersList
      loading={loading}
      currPage={page}
      characters={data?.characters.results || []}
      pageInfo={data?.characters.info}
      onPrevClick={() => setPage(page - 1)}
      onNextClick={() => setPage(page + 1)}
    />
  );
};

export default CharactersListWithData;
