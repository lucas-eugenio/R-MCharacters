import React from "react";
import logo from "../../assets/logo.svg";
import { charactersListRote } from "../../constants/routes";
import translations from "../../constants/translations";
import { BaseHeader, HeaderImg } from "./header.styled";

const Header = (): React.ReactElement => {
  return (
    <BaseHeader>
      <a href={charactersListRote}>
        <HeaderImg src={logo} alt={translations.charactersList.name} />
      </a>
    </BaseHeader>
  );
};

export default Header;
