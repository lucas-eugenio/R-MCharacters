import React from "react";
import { BaseRouter, Routes, Route } from "../../utils/useRouter";
import CharactersListPage from "../pages/characters-list.page";
import CharacterDetailPage from "../pages/character-detail.page";
import {
  charactersListRote,
  characterDetailRoute,
} from "../../constants/routes";
import Header from "../header/header.component";

const Router = (): React.ReactElement => {
  return (
    <BaseRouter>
      <Header />
      <Routes>
        <Route path={charactersListRote} element={<CharactersListPage />} />
        <Route path={characterDetailRoute} element={<CharacterDetailPage />} />
        <Route path="*" element={<p>Nothing To See Here</p>} />
      </Routes>
    </BaseRouter>
  );
};

export default Router;
