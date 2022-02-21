import React from "react";
import logo from "../../assets/logo.svg";
import { Header, HeaderImg } from "./base-app.styled";

const BaseApp = (): React.ReactElement => {
  return (
    <Header>
      <HeaderImg src={logo} alt="" />
    </Header>
  );
};

export default BaseApp;
