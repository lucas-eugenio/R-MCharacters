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

// I opted to load Rick data, if there is no ID, because it is the first record.
const DEFAULT_ID = "1";

const CharacterDetailPage = (): React.ReactElement => {
  const params = useParams();
  const characterId = params?.characterId || DEFAULT_ID;

  console.log("PARAMS:", params);

  const { data, loading } = useQuery<
    CharacterQueryResultsType,
    CharacterQueryVariablesType
  >(CharacterQuery, { variables: { characterId: characterId || DEFAULT_ID } });

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
