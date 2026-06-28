import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import UserProfileInformation from "./UserProfileInformation";

vi.mock("../../ui/index.js", () => ({
  Label: ({ children }) => <span data-testid="label"> {children}</span>,
  Row: ({ children, type }) => (
    <div data-testid="row" data-type={type}>
      {children}
    </div>
  ),
}));

vi.mock("../location/LocationInformation", () => ({
  default: ({ location }) => (
    <div data-testid="location-information" data-location-id={location.id} />
  ),
}));

const mockUserProfile = {
  firstName: "Vihanga",
  lastName: "Fernando",
  createdDateTime: "2020-07-01",
  modifiedDateTime: "2022-06-05",
  location: { id: 46, city: "Colombo" },
};

const setup = (user = mockUserProfile) =>
  render(<UserProfileInformation user={user} />);

describe("UserProfileInformation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("User identity", () => {
    it("should render the user profile first name with label", () => {
      setup();

      expect(screen.getByText("First name :")).toBeInTheDocument();
      expect(screen.getByText(mockUserProfile.firstName)).toBeInTheDocument();
    });

    it("should render the user profile last name with label", () => {
      setup();

      expect(screen.getByText("Last name :")).toBeInTheDocument();
      expect(screen.getByText(mockUserProfile.lastName)).toBeInTheDocument();
    });
  });

  describe("Timestamps", () => {
    it("should render the created date time  with labels", () => {
      setup();

      expect(screen.getByText("Created Date Time :")).toBeInTheDocument();
      expect(
        screen.getByText(mockUserProfile.createdDateTime),
      ).toBeInTheDocument();
    });

    it("should render the modified date time with labels", () => {
      setup();

      expect(screen.getByText("Modified Date Time :")).toBeInTheDocument();
      expect(
        screen.getByText(mockUserProfile.modifiedDateTime),
      ).toBeInTheDocument();
    });
  });

  describe("location", () => {
    it("should render the Location information component", () => {
      setup();

      expect(screen.getByTestId("location-information")).toBeInTheDocument();
    });

    it("should be able to render correct location information on LocationInformation component", () => {
      setup();

      expect(screen.getByTestId("location-information")).toHaveAttribute(
        "data-location-id",
        String(mockUserProfile.location.id),
      );
    });
  });

  describe("layout", () => {
    it("should render the outer Row component with Vertical as type property", () => {
      setup();

      const rows = screen.getAllByTestId("row");
      const verticalRow = rows.find(
        (row) => row.getAttribute("data-type") === "vertical",
      );

      expect(verticalRow).toBeInTheDocument();
    });

    it("should render the horizontal-center Rows for first name and timestamps", () => {
      setup();

      const rows = screen.getAllByTestId("row");
      const centeredRow = rows.filter(
        (row) => row.getAttribute("data-type") === "horizontal-center",
      );

      expect(centeredRow).toHaveLength(3);
    });

    it("should render the horizontal-start Row for last name", () => {
      setup();

      const rows = screen.getAllByTestId("row");

      const startRows = rows.filter(
        (row) => row.getAttribute("data-type") === "horizontal-start",
      );

      expect(startRows).toHaveLength(1);
    });
  });
});
