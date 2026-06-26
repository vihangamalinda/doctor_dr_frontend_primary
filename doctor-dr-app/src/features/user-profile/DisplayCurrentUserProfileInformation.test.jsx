import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import DisplayCurrentUserProfileInformation from "./DisplayCurrentUserProfileInformation";
import { useUserProfileById } from "./hooks/useUserProfileById";
import { selectCurrentLoggedUserProfileId } from "../authentication/store/selectors/CurrentLoggedUserSelectors";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
}));

vi.mock("./hooks/useUserProfileById", () => ({
  useUserProfileById: vi.fn(),
}));

vi.mock("./UserProfileInformation", () => ({
  default: ({ user }) => (
    <div data-testid="user-profile-information">{user.firstName}</div>
  ),
}));

vi.mock("../hospital/HospitalInformation", () => ({
  default: ({ hospital }) => (
    <div data-testid="hospital-information">{hospital.name}</div>
  ),
}));

vi.mock("../../ui/index.js", () => ({
  Spinner: () => <div data-testid="spinner">Loading...</div>,
}));

const mockUserProfile = {
  id: "989",
  firstName: "Semage",
  lastName: "Fernando",
  hospital: {
    id: 10,
    name: "Asiri Central Hospital",
  },
};

const { id, firstName, lastName, hospital } = mockUserProfile;

const mockHookReturn = ({
  userProfile = mockUserProfile,
  isLoading = false,
} = {}) => {
  useUserProfileById.mockReturnValue({
    userProfileDataById: userProfile,
    isUserProfileLoading: isLoading,
  });
};

describe("DisplayCurrentUserProfileInformation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    const userProfileId = id;
    useSelector.mockReturnValue(userProfileId);
  });

  describe("at loading state", () => {
    it("should render spinner while component at loading state", () => {
      // arrange
      mockHookReturn({ isLoading: true });
      // action
      render(<DisplayCurrentUserProfileInformation />);
      // assertion
      expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });

    it("should not render user information on DOM when component is at loading state", () => {
      // arrange
      mockHookReturn({ isLoading: true });
      // action
      render(<DisplayCurrentUserProfileInformation />);
      // assertion
      expect(
        screen.queryByTestId("user-profile-information"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByTestId("hospital-information"),
      ).not.toBeInTheDocument();
    });
  });

  describe("at loaded state", () => {
    beforeEach(() => {
      mockHookReturn();
    });
    it("should render user profile information when component is not at loading state ", () => {
      // action
      render(<DisplayCurrentUserProfileInformation />);

      // assertion
      expect(
        screen.getByTestId("user-profile-information"),
      ).toBeInTheDocument();
      expect(screen.getByText(firstName)).toBeInTheDocument();
    });

    it("should render hospital information", () => {
      // action
      render(<DisplayCurrentUserProfileInformation />);

      // assertion
      expect(screen.getByTestId("hospital-information")).toBeInTheDocument();
      expect(screen.getByText(hospital.name)).toBeInTheDocument();
    });

    it("should render the hospital heading", () => {
      // action
      render(<DisplayCurrentUserProfileInformation />);

      // assertion
      expect(screen.getByText(/hospital information/i)).toBeInTheDocument();
    });

    it("should not render spinner when component at loaded state", () => {
      // action
      render(<DisplayCurrentUserProfileInformation />);
      // assertion
      expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
    });
  });

  describe("redux state integration", () => {
    it("should call useUserProfileId with the currently logged in user id", () => {
      mockHookReturn();

      render(<DisplayCurrentUserProfileInformation />);

      expect(useSelector).toHaveBeenCalledWith(
        selectCurrentLoggedUserProfileId,
      );
    });
    it("should invoke useUserProfileById exactly once", () => {
      mockHookReturn();

      render(<DisplayCurrentUserProfileInformation />);

      expect(useUserProfileById).toHaveBeenCalledTimes(1);
      expect(useUserProfileById).toHaveBeenCalledWith(id);
    });
  });
});
