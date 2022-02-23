import React from "react";
import logo from "../../assets/logo.svg";
import { charactersListRote } from "../../constants/routes";
import { BaseHeader, HeaderImg } from "./header.styled";

const Header = (): React.ReactElement => {
  return (
    <BaseHeader>
      <a href={charactersListRote}>
        <HeaderImg src={logo} alt="Home Page" />
      </a>
    </BaseHeader>
  );
};

export default Header;
