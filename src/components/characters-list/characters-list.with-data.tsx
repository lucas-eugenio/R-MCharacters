import React from "react";
import CharactersList from "./characters-list.component";
import { useQuery } from "../../utils/useGraphQL";
import CharactersQuery, {
  CharactersQueryResultsType,
  CharactersQueryVariablesType,
} from "../../graphql/queries/characters.query";
import Error from "../error/error.component";
import { useNavigate, useParams } from "../../utils/useRouter";
import { createListRoute } from "../../constants/routes";

const CharactersListWithData = (): React.ReactElement => {
  const params = useParams();
  const numericPage = !!params.page && parseInt(params?.page);
  const page = numericPage || 1;

  const { data, loading, error } = useQuery<
    CharactersQueryResultsType,
    CharactersQueryVariablesType
  >(CharactersQuery, {
    variables: { page: page },
  });

  const navigate = useNavigate();
  const navigateToOtherPage = (page: number) => {
    navigate(createListRoute(page));
  };

  if (!!error) {
    return <Error message={error.message} />;
  }

  return (
    <CharactersList
      loading={loading}
      currPage={page}
      characters={data?.characters.results || []}
      pageInfo={data?.characters.info}
      onRouteChange={navigateToOtherPage}
    />
  );
};

export default CharactersListWithData;
