import React from "react";
import logo from "../../assets/logo.svg";
import { BaseHeader, HeaderImg } from "./header.styled";
import { Link } from "../../utils/useRouter";
import { charactersListRote } from "../../constants/routes";

const Header = (): React.ReactElement => (
  <BaseHeader>
    <Link to={charactersListRote.completeUrl}>
      <HeaderImg src={logo} alt="" />
    </Link>
  </BaseHeader>
);

export default Header;
