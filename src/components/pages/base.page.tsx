import React from "react";
import styleSheet from "../../constants/style-sheet";

interface BasePageProps {
  children: React.ReactElement | React.ReactElement[];
}

const BasePage = ({ children }: BasePageProps): React.ReactElement => {
  return (
    <main
      style={{
        padding: styleSheet.spaces.large,
        backgroundColor: styleSheet.colors.white,
      }}
    >
      {children}
    </main>
  );
};

export default BasePage;
