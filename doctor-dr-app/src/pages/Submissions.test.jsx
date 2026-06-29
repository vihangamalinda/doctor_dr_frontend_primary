import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Submissions from "./Submissions";

vi.mock("../features/submission/SubmissionTableOperator.jsx", () => ({
  default: () => <div data-testid="submission-table-operator" />,
}));

vi.mock("../features/submission/SubmissionTable", () => ({
  default: () => <div data-testid="submission-table" />,
}));

vi.mock("../ui/index.js", () => ({
  Heading: ({ children, as: Tag = "h1" }) => <Tag>{children}</Tag>,
  Row: ({ children }) => <div data-testid="row">{children}</div>,
}));

const setup = () => render(<Submissions />);

describe("Submissions", () => {
  it("should render the correct page heading", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: "Submissions by user" }),
    ).toBeInTheDocument();
  });

  it("should render the heading under h1 level", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: "Submissions by user", level: 1 }),
    ).toBeInTheDocument();
  });

  it("should render the SubmissionTableOperator component", () => {
    setup();

    expect(screen.getByTestId("submission-table-operator")).toBeInTheDocument();
  });

  it("should render the SubmissionTable component", () => {
    setup();

    expect(screen.getByTestId("submission-table")).toBeInTheDocument();
  });
});
