import React from "react";
import { useQuery } from "../../utils/useGraphQL";
import CharactersQuery from "../../graphql/queries/characters.query";
import { Main } from "./body.styled";

const Body = (): React.ReactElement => {
  const { data, loading, error } = useQuery(CharactersQuery);

  console.log("DATA:", data);
  console.log("LOADING:", loading);
  console.log("ERROR:", error);

  return (
    <Main>
      <h1>Lista de Episódios</h1>
    </Main>
  );
};

export default Body;
