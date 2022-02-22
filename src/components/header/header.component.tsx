import React from "react";
import logo from "../../assets/logo.svg";
import { BaseHeader, HeaderImg } from "./header.styled";

interface HeaderProps {
  onLogoClick: () => void;
}

const Header = ({ onLogoClick }: HeaderProps): React.ReactElement => (
  <BaseHeader>
    <HeaderImg src={logo} alt="" role="button" onClick={onLogoClick} />
  </BaseHeader>
);

export default Header;
