import React from "react";
import BasePage from "./base.page";
import CharactersListWithData from "../characters-list/characters-list.with-data";

const CharactersListPage = (): React.ReactElement => (
  <BasePage>
    <CharactersListWithData />
  </BasePage>
);

export default CharactersListPage;
