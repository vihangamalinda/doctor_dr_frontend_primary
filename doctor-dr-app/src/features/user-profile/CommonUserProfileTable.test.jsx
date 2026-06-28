import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import CommonUserProfileTable from "./CommonUserProfileTable";
import { ROLE_CONSTANTS } from "../user-role/helper";

vi.mock("./hooks/useUserProfilesByUserRoleValue", () => ({
  useUserProfilesByUserRoleValue: vi.fn(),
}));

vi.mock("../user-role/helper/index.js", () => ({
  ROLE_CONSTANTS: { commonUser: "COMMON_USER" },
}));

vi.mock("../../ui/index.js", () => ({
  Spinner: () => <div data-testid="spinner">Loading...</div>,
  Row: ({ children, type }) => (
    <div data-testid="row" data-type={type}>
      {children}
    </div>
  ),
}));

vi.mock("./UserProfileCard.jsx", () => ({
  default: ({ userProfile }) => (
    <div data-testid="user-profile-card" data-test={userProfile.id}>
      {userProfile.name}
    </div>
  ),
}));

import { useUserProfilesByUserRoleValue } from "./hooks/useUserProfilesByUserRoleValue.js";

const createUserProfile = (id, name, email) => ({
  id: id,
  name: name,
  email: email,
});

const mockUserProfiles = [
  createUserProfile(134, "Vihanga Malinda", "vihanga@gmail.com"),
  createUserProfile(15, "Vihanga Fernando", "vihanga123@gmail.com"),
  createUserProfile(14, "Viha Malinda", "viha@gmail.com"),
];

const mockHookReturn = ({
  userProfilesByUserRoleValue = mockUserProfiles,
  isUserProfilesLoading = false,
} = {}) => {
  useUserProfilesByUserRoleValue.mockReturnValue({
    userProfilesByUserRoleValue: userProfilesByUserRoleValue,
    isUserProfilesLoading: isUserProfilesLoading,
  });
};

const setup = () => render(<CommonUserProfileTable />);

describe("CommonUserProfileTabel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("at loading state", () => {
    it("should render spinner", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: [],
        isUserProfilesLoading: true,
      });

      setup();

      expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });

    it("should not render the Row container that holds user profile information", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: [],
        isUserProfilesLoading: true,
      });

      setup();

      expect(screen.queryByTestId("row")).not.toBeInTheDocument();
    });

    it("should not render any profiles cards even if there are existing user-profiles", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: mockUserProfiles,
        isUserProfilesLoading: true,
      });

      setup();

      expect(screen.queryAllByTestId("user-profile-card")).toHaveLength(0);
    });
  });

  describe("at loaded state", () => {
    it("should not render the spinner", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: mockUserProfiles,
        isUserProfilesLoading: false,
      });

      setup();

      expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
    });

    it("should render the Row container which is a vertical type", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: mockUserProfiles,
        isUserProfilesLoading: false,
      });

      setup();

      const row = screen.getByTestId("row");
      expect(row).toBeInTheDocument();
      expect(row).toHaveAttribute("data-type", "vertical");
    });

    it("should renders a cards for every user profile", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: mockUserProfiles,
        isUserProfilesLoading: false,
      });

      setup();

      expect(screen.queryAllByTestId("user-profile-card")).toHaveLength(
        mockUserProfiles.length,
      );
    });

    it("should be able to correctly display the user profile data on the card", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: mockUserProfiles,
        isUserProfilesLoading: false,
      });

      setup();

      mockUserProfiles.forEach(({ id, name }) => {
        const card = screen.getByText(name);

        expect(card).toBeInTheDocument();
        expect(
          card.closest("[data-testid='user-profile-card']"),
        ).toHaveAttribute("data-test", String(id));
      });
    });
    it("should renders Row container even though there are no user profiles present", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: [],
        isUserProfilesLoading: false,
      });

      setup();

      expect(screen.getByTestId("row")).toBeInTheDocument();
      expect(screen.queryAllByTestId("user-profile-card")).toHaveLength(0);
    });
    it("should render exactly one card when there is a single user profile is present", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: [mockUserProfiles[0]],
        isUserProfilesLoading: false,
      });

      setup();

      expect(screen.getAllByTestId("user-profile-card")).toHaveLength(1);
      expect(screen.getByText(mockUserProfiles[0].name)).toBeInTheDocument();
    });
  });
  describe("custom hook integration", () => {
    it("should invoke useUserProfilesByUserRoleValue with the common user role constant", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: [],
        isUserProfilesLoading: false,
      });

      setup();

      expect(useUserProfilesByUserRoleValue).toHaveBeenCalledWith(
        "COMMON_USER",
      );
    });

    it("should invoke the hook only once per render", () => {
      mockHookReturn({
        userProfilesByUserRoleValue: [],
        isUserProfilesLoading: false,
      });

      setup();

      expect(useUserProfilesByUserRoleValue).toHaveBeenCalledTimes(1);
    });
  });
});
