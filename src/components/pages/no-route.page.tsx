import React from "react";
import BasePage from "./base.page";
import Error from "../error/error.component";
import translations from "../../constants/translations";

const NoRoutePage = (): React.ReactElement => (
  <BasePage>
    <Error message={translations.error.noRoute} />
  </BasePage>
);

export default NoRoutePage;
