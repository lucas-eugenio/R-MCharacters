import React from "react";
import { useQuery } from "../../utils/useGraphQL";
import logo from "../../assets/logo.svg";
import CharactersQuery from "../../graphql/queries/characters.query";
import { BaseHeader, HeaderImg } from "./header.styled";

const Header = (): React.ReactElement => {
  const { data, loading, error } = useQuery(CharactersQuery);

  console.log("DATA:", data);
  console.log("LOADING:", loading);
  console.log("ERROR:", error);

  return (
    <BaseHeader>
      <HeaderImg src={logo} alt="" />
    </BaseHeader>
  );
};

export default Header;
