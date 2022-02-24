import React from "react";
import { BaseRouter, Routes, Route } from "../../utils/useRouter";
import CharactersListPage from "../pages/characters-list.page";
import CharacterDetailPage from "../pages/character-detail.page";
import NoRoutePage from "../pages/no-route.page";
import {
  baseRoute,
  charactersListRoute,
  characterDetailRoute,
} from "../../constants/routes";
import Header from "../header/header.component";

const Router = (): React.ReactElement => {
  return (
    <BaseRouter>
      <Header />
      <Routes>
        <Route path={baseRoute} element={<CharactersListPage />} />
        <Route path={charactersListRoute} element={<CharactersListPage />} />
        <Route path={characterDetailRoute} element={<CharacterDetailPage />} />
        <Route path="*" element={<NoRoutePage />} />
      </Routes>
    </BaseRouter>
  );
};

export default Router;
