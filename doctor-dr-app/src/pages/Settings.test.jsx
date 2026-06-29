import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Settings from "./Settings";

vi.mock("../ui/index.js", () => ({
  Heading: ({ children, as: Tag = "h1" }) => <Tag>{children}</Tag>,
  Row: ({ children }) => <div>{children}</div>,
}));

vi.mock("../features/color-grouping/ColourSelections.jsx", () => ({
  default: () => <div data-testid="colour-selections" />,
}));

vi.mock("../features/authentication/index.js", () => ({
  Logout: () => <div data-testid="logout" />,
}));

const setup = () => render(<Settings />);

describe("Settings", () => {
  it("should render the correct page heading", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: "Settings" }),
    ).toBeInTheDocument();
  });

  it("should render the heading under h1 level", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: "Settings", level: 1 }),
    ).toBeInTheDocument();
  });

  it("should render the Colour selections component", () => {
    setup();
    expect(screen.getByTestId("colour-selections")).toBeInTheDocument();
  });

  it("should render the Logout component", () => {
    setup();

    expect(screen.getByTestId("logout")).toBeInTheDocument();
  });
});
