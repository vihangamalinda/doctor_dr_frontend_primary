import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import UpdateUserPassword from "./UpdateUserPassword";

vi.mock("../features/authentication/index.js", () => ({
  UpdatePasswordForm: () => <div data-testid="update-password-form" />,
}));

const setup = () => render(<UpdateUserPassword />);

describe("UpdateUserPassword", () => {
  it("should render the update password form component", () => {
    setup();

    expect(screen.getByTestId("update-password-form")).toBeInTheDocument();
  });
});
