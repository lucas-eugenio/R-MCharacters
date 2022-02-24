import React from "react";
import { useQuery } from "../../utils/useGraphQL";
import { useParams } from "../../utils/useRouter";
import BasePage from "./base.page";
import CharacterQuery, {
  CharacterQueryResultsType,
  CharacterQueryVariablesType,
} from "../../graphql/queries/character.query";
import CharacterDetail from "../character-detail/character-detail.component";
import CharacterDetailLoading from "../character-detail/character-detail.loading";
import Error from "../error/error.component";

// I opted to load Rick data, if there is no ID, because it is the first record.
const DEFAULT_ID = "1";

const CharacterDetailPage = (): React.ReactElement => {
  const params = useParams();
  const characterId = params?.characterId || DEFAULT_ID;

  const { data, loading, error } = useQuery<
    CharacterQueryResultsType,
    CharacterQueryVariablesType
  >(CharacterQuery, { variables: { characterId: characterId || DEFAULT_ID } });

  if (!!error) {
    return (
      <BasePage>
        <Error message={error.message} />
      </BasePage>
    );
  }

  return (
    <BasePage>
      {loading ? (
        <CharacterDetailLoading />
      ) : (
        <CharacterDetail character={data?.character} />
      )}
    </BasePage>
  );
};

export default CharacterDetailPage;
