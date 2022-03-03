import { render, screen } from "@testing-library/react";
import Error from "./error.component";
import translations from "../../constants/translations";

const message = "The record does not exist";

it("Renders Icon, Title And Message", () => {
  render(<Error message={message} />);

  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();

  const titleElement = screen.getByText(translations.error.title);
  expect(titleElement).toBeInTheDocument();

  const messageElement = screen.getByText(message);
  expect(messageElement).toBeInTheDocument();
});
