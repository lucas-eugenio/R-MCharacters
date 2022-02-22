import React from "react";
import { useQuery } from "../../utils/useGraphQL";
import CharactersQuery, {
  CharactersQueryResultsType,
  CharactersQueryVariablesType,
} from "../../graphql/queries/characters.query";
import BasePage from "./base.page";
import { Link } from "../../utils/useRouter";
import { characterDetailRoute } from "../../constants/routes";

const CharactersListPage = (): React.ReactElement => {
  const { data, loading, error } = useQuery<
    CharactersQueryResultsType,
    CharactersQueryVariablesType
  >(CharactersQuery, {
    variables: { page: 1 },
  });

  console.log("DATA:", data);
  console.log("LOADING:", loading);
  console.log("ERROR:", error);

  return (
    <BasePage>
      <h1>Lista de Episódios</h1>
      <Link to={characterDetailRoute}>Bleus</Link>
    </BasePage>
  );
};

export default CharactersListPage;
