import { render, screen } from "@testing-library/react";
import CharacterCard from "./character-card.component";

const character = {
  id: "1",
  name: "Rick Sanchez",
  status: "Alive" as const,
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

it("Renders Avatar Img, Name And Status", () => {
  render(<CharacterCard character={character} />);

  const avatarElement = screen.getByRole("img");
  expect(avatarElement).toBeInTheDocument();
  expect(avatarElement).toHaveAttribute("alt", "");
  expect(avatarElement).toHaveAttribute("src", character.image);

  const nameElement = screen.getByText(character.name);
  expect(nameElement).toBeInTheDocument();

  const statusElement = screen.getByText(character.status);
  expect(statusElement).toBeInTheDocument();
});
