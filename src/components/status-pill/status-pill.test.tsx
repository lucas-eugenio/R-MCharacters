import { render, screen } from "@testing-library/react";
import styleSheet from "../../constants/style-sheet";
import StatusPill from "./status-pill.component";

it("Renders Alive Pill With Correct Colors", () => {
  const status = "Alive";

  render(<StatusPill status={status} />);

  const imgElement = screen.getByText(status);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveStyle(
    `color: ${styleSheet.colors.green}; background-color: ${styleSheet.colors.lightGreen}`
  );
});

it("Renders Dead Pill With Correct Colors", () => {
  const status = "Dead";

  render(<StatusPill status={status} />);

  const imgElement = screen.getByText(status);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveStyle(
    `color: ${styleSheet.colors.red}; background-color: ${styleSheet.colors.lightRed}`
  );
});

it("Renders Other Pill With Correct Colors", () => {
  const status = "unknown";

  render(<StatusPill status={status} />);

  const imgElement = screen.getByText(status);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveStyle(
    `color: ${styleSheet.colors.darkGray}; background-color: ${styleSheet.colors.offWhite}`
  );
});
