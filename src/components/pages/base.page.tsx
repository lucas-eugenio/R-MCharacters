import React from "react";
import styleSheet from "../../constants/style-sheet";
// import Header from "../header/header.component";

interface BasePageProps {
  children: React.ReactElement | React.ReactElement[];
}

const BasePage = ({ children }: BasePageProps): React.ReactElement => {
  return (
    <main
      style={{
        padding: styleSheet.spaces.large,
        color: styleSheet.colors.darkGray,
      }}
    >
      {/* <Header /> */}
      {children}
    </main>
  );
};

export default BasePage;
