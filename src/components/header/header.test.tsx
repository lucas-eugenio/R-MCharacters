import { render, screen } from "@testing-library/react";
import translations from "../../constants/translations";
import { BaseRouter } from "../../utils/useRouter";
import Header from "./header.component";
import logo from "../../assets/logo.svg";

it("Renders Logo Image As Link", () => {
  render(
    <BaseRouter>
      <Header />
    </BaseRouter>
  );

  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute("alt", translations.charactersList.name);
  expect(imgElement).toHaveAttribute("src", logo);

  const linKElement = screen.getByRole("link");
  expect(linKElement).toBeInTheDocument();
});
