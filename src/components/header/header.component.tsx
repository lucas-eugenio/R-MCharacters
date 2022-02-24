import React from "react";
import logo from "../../assets/logo.svg";
import { baseRoute } from "../../constants/routes";
import translations from "../../constants/translations";
import { Link } from "../../utils/useRouter";
import { BaseHeader, HeaderImg } from "./header.styled";

const Header = (): React.ReactElement => {
  return (
    <BaseHeader>
      <Link to={baseRoute}>
        <HeaderImg src={logo} alt={translations.charactersList.name} />
      </Link>
    </BaseHeader>
  );
};

export default Header;
