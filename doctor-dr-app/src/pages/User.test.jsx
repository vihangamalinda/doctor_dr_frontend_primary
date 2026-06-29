import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import User from "./User";

vi.mock("../ui/index.js", () => ({
  Heading: ({ children }) => <h1>{children}</h1>,
}));

vi.mock(
  "../features/user-profile/DisplayCurrentUserProfileInformation.jsx",
  () => ({
    default: () => (
      <div data-testid="display-current-user-profile-information" />
    ),
  }),
);

vi.mock("../features/authentication/index.js", () => ({
  UpdatePasswordButton: () => <div data-testid="update-password-button" />,
}));

const setup = () => render(<User />);

describe("User", () => {
  it("should render the correct page heading", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: "User details" }),
    ).toBeInTheDocument();
  });

  it("should render the heading under h1 level", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: "User details", level: 1 }),
    ).toBeInTheDocument();
  });

  it("should render the Display Current User Profile Information component", () => {
    setup();

    expect(
      screen.getByTestId("display-current-user-profile-information"),
    ).toBeInTheDocument();
  });

  it("should render the Update password Button component", () => {
    setup();

    expect(screen.getByTestId("update-password-button")).toBeInTheDocument();
  });
});
