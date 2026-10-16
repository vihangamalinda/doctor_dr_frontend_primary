import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserProfileCard from "./UserProfileCard";

vi.mock("./hooks/useDeleteUserProfileById", () => ({
  useDeleteUserProfileById: vi.fn(),
}));

vi.mock("../../ui/index.js", () => ({
  LabelGroupStyle: ({ children }) => (
    <div data-testid="label-group">{children}</div>
  ),
  LabelPrimary: ({ children }) => (
    <label data-testid="label-primary">{children}</label>
  ),
  Row: ({ children, type }) => (
    <div data-testid="row" data-type={type}>
      {children}
    </div>
  ),
  Button: ({ children, onClick, disabled, size, variation }) => (
    <button
      data-testid="button"
      data-size={size}
      data-variation={variation}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  ),
}));

import { useDeleteUserProfileById } from "./hooks/useDeleteUserProfileById";

const mockUserProfile = {
  id: 568,
  firstName: "Semege",
  lastName: "Fernando",
  createdDateTime: "2021-07-01",
  modifiedDateTime: "2024-06-05",
  hospital: {
    name: "Asiri Central",
    emergencyNumber: "0112672327",
  },
};

const { firstName, lastName, createdDateTime, modifiedDateTime, hospital } =
  mockUserProfile;

const mockDeleteUserProfileById = vi.fn();

const mockHookReturn = ({ isDeleteting = false } = {}) => {
  useDeleteUserProfileById.mockReturnValue({
    deleteUserProfileById: mockDeleteUserProfileById,
    isdeleting: isDeleteting,
  });
};

const setup = (userProfile = mockUserProfile) =>
  render(<UserProfileCard userProfile={userProfile} />);

describe("UserProfileCard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("user identity", () => {
    it("should render the user's full name in the heading", () => {
      mockHookReturn({ isDeleteting: false });

      setup();

      expect(screen.getByText(/Semege/)).toBeInTheDocument();
      expect(screen.getByText(/Fernando/)).toBeInTheDocument();
      expect(screen.getByText(/Semege Fernando/)).toBeInTheDocument();
    });
  });

  describe("should render timestatmps", () => {
    it("should render the user profile created date", () => {
      mockHookReturn({ isDeleteting: false });

      setup();

      expect(screen.getByText(createdDateTime)).toBeInTheDocument();
    });
    it("should render the user profile modified date", () => {
      mockHookReturn({ isDeleteting: false });

      setup();

      expect(screen.getByText(modifiedDateTime)).toBeInTheDocument();
    });
  });

  describe("should render the user profile's hospital information", () => {
    it("should render correct hospital information", () => {
      mockHookReturn({ isDeleteting: false });

      setup();
      expect(screen.getByText("Hospital Information")).toBeInTheDocument();
      expect(screen.getByText(/Asiri Central/)).toBeInTheDocument();
      expect(screen.getByText(hospital.emergencyNumber)).toBeInTheDocument();
    });
  });

  describe("delete button", () => {
    it("should render the delete button on dom", () => {
      mockHookReturn({ isDeleteting: false });

      setup();

      expect(screen.getByTestId("button")).toBeInTheDocument();
      expect(screen.getByText("Delete")).toBeInTheDocument();
    });

    it("should render the button with danger type ", () => {
      mockHookReturn({ isDeleteting: false });

      setup();

      expect(screen.getByTestId("button")).toHaveAttribute(
        "data-variation",
        "danger",
      );
    });

    it("should render the delet button with medium size", () => {
      mockHookReturn({ isDeleteting: false });

      setup();

      expect(screen.getByTestId("button")).toHaveAttribute(
        "data-size",
        "medium",
      );
    });

    it("should be enabled when not performing delete", () => {
      mockHookReturn({ isDeleteting: false });

      setup();
      expect(screen.getByTestId("button")).not.toBeDisabled();
    });

    it("should be disabled when deleting is on progress", () => {
      mockHookReturn({ isDeleteting: true });

      setup();

      expect(screen.getByTestId("button")).toBeDisabled();
    });
  });

  describe("deleting behaviour", () => {
    it("should correctly call the deleteUserProfileById when delete button is clicked", async () => {
      mockHookReturn({ isDeleteting: false });

      setup();

      await userEvent.click(screen.getByTestId("button"));

      expect(mockDeleteUserProfileById).toHaveBeenCalledTimes(1);
      expect(mockDeleteUserProfileById).toHaveBeenCalledWith(
        mockUserProfile.id,
      );
    });

    it("should not be able to call deleteUserProfileById when the delete button is disabled", async () => {
      mockHookReturn({ isDeleteting: true });

      setup();

      await userEvent.click(screen.getByTestId("button"));
      expect(mockDeleteUserProfileById).not.toHaveBeenCalled();
    });
  });

  describe("layout", () => {
    it("should render a horizontal-end Row Wrapping the delete button", () => {
      mockHookReturn({ isDeleteting: false });

      setup();

      const rows = screen.getAllByTestId("row");
      const endRow = rows.find(
        (row) => row.getAttribute("data-type") === "horizontal-end",
      );

      expect(endRow).toBeInTheDocument();
      expect(endRow).toContainElement(screen.getByTestId("button"));
    });

    it("should render horizontal-start Rows for the timestamp and hospital fields", () => {
      mockHookReturn({ isDeleteting: true });

      setup();

      const rows = screen.getAllByTestId("row");
      const startRows = rows.filter(
        (row) => row.getAttribute("data-type") === "horizontal-start",
      );

      expect(startRows).toHaveLength(4);
    });
  });
});
