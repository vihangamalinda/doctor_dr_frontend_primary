import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Request from "./Request";

vi.mock("../ui/index.js", () => ({
  Heading: ({ children }) => <h1>{children}</h1>,
  Row: ({ children }) => <h1>{children}</h1>,
}));

vi.mock("../features/request-help/CreateRequest", () => ({
  default: () => <div data-testid="create-request" />,
}));

vi.mock("../features/request-help/RequestTable", () => ({
  default: () => <div data-testid="request-table" />,
}));

const setup = () => render(<Request />);

describe("Request", () => {
  it("should render the correct page heading", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: "Request for help" }),
    ).toBeInTheDocument();
  });

  it("should render the heading under h1 level", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: "Request for help", level: 1 }),
    ).toBeInTheDocument();
  });
  it("should render the create reuqest component", () => {
    setup();

    expect(screen.getByTestId("create-request")).toBeInTheDocument();
  });
  it("should render the request table component", () => {
    setup();

    expect(screen.getByTestId("request-table")).toBeInTheDocument();
  });
});
