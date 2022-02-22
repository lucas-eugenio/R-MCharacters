import React from "react";
import { BaseRouter, Routes, Route, useNavigate } from "../../utils/useRouter";
import CharactersListPage from "../pages/characters-list.page";
import CharacterDetailPage from "../pages/character-detail.page";
import {
  charactersListRote,
  characterDetailRoute,
} from "../../constants/routes";
import Header from "../header/header.component";

const Router = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleHeaderLogoClick = (): void => {
    navigate(charactersListRote);
  };

  return (
    <BaseRouter>
      <Header onLogoClick={handleHeaderLogoClick} />
      <Routes>
        <Route path={charactersListRote} element={<CharactersListPage />} />
        <Route path={characterDetailRoute} element={<CharacterDetailPage />} />
        <Route path="*" element={<p>Nothing To See Here</p>} />
      </Routes>
    </BaseRouter>
  );
};

export default Router;
