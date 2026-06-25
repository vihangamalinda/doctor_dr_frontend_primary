import React from "react";
import { render, screen } from "@testing-library/react";
import OperationalStaffUserProfileTable from "./OperationalStaffUserProfileTable";
import { ROLE_CONSTANTS } from "../user-role/helper";
import { describe, it, expect, vi, beforeEach } from "vitest";

// const useUserProfilesByUserRoleValuePath =
//   "./hooks/useUserProfilesByUserRoleValue";
// const UserProfileCardPath = "./UserProfileCard";
// const uiIndexPath = "../../ui/index.js";

vi.mock("./hooks/useUserProfilesByUserRoleValue", () => {
  return {
    useUserProfilesByUserRoleValue: vi.fn(),
  };
});

vi.mock("../../ui/index.js", () => ({
  Spinner: () => <div data-testid="spinner">Loading...</div>,
  Row: ({ children, type }) => (
    <div data-testid="row" data-type={type}>
      {children}
    </div>
  ),
}));

vi.mock("./UserProfileCard", () => ({
  default: function MockUserProfileCard({ userProfile }) {
    return (
      <div data-testid="user-profile-card" data-id={userProfile.id}>
        {userProfile.name}
      </div>
    );
  },
}));

import { useUserProfilesByUserRoleValue } from "./hooks/useUserProfilesByUserRoleValue";

const createMockUserProfile = (id, name) => ({ id, name });

const mockUserProfiles = [
  createMockUserProfile("42", "Vihanga Malinda"),
  createMockUserProfile("205", "Semege Vihanga"),
  createMockUserProfile("12", "Semage Fernando"),
];

const mockHookReturn = ({ userProfiles = [], loading = false } = {}) => {
  useUserProfilesByUserRoleValue.mockReturnValue({
    userProfilesByUserRoleValue: userProfiles,
    isUserProfilesLoading: loading,
  });
};

describe("OperationalStaffUserProfileTable", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("at loading state", () => {
    it("should render loading spinnder", () => {
      //arrange
      mockHookReturn({ loading: true });
      //act
      render(<OperationalStaffUserProfileTable />);

      //assertions
      expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });

    it("should not render row while loading", () => {
      //arrange
      mockHookReturn({ loading: true });
      //act
      render(<OperationalStaffUserProfileTable />);

      //assertions
      expect(screen.queryByTestId("row")).not.toBeInTheDocument();
    });

    it("should not render user cards while loading", () => {
      //arrange
      mockHookReturn({ userProfiles: mockUserProfiles, loading: true });
      //act
      render(<OperationalStaffUserProfileTable />);

      //assertions
      expect(screen.queryByTestId("user-profile-card")).not.toBeInTheDocument();
    });
  });

  describe("at loaded state", () => {
    it("should render vertical row container", () => {
      //arrange
      mockHookReturn({ userProfiles: mockUserProfiles, loading: false });
      //act
      render(<OperationalStaffUserProfileTable />);

      //assertions
      expect(screen.getByTestId("row")).toHaveAttribute(
        "data-type",
        "vertical",
      );
    });

    it("should render user cards for each user profile", () => {
      //arrange
      mockHookReturn({
        userProfiles: mockUserProfiles,
        loading: false,
      });
      //act

      render(<OperationalStaffUserProfileTable />);

      //assertions
      const userCards = screen.getAllByTestId("user-profile-card");

      expect(userCards).toHaveLength(mockUserProfiles.length);

      mockUserProfiles.forEach(({ name }) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });

    it("should not render loading spinner", () => {
      //arrange
      mockHookReturn({ userProfiles: mockUserProfiles, loading: false });
      //act
      render(<OperationalStaffUserProfileTable />);

      //assertions
      expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
    });

    describe("when there are no user profiles", () => {
      it("renders no user cards", () => {
        //arrange
        mockHookReturn({
          userProfiles: [],
          loading: false,
        });
        //act
        render(<OperationalStaffUserProfileTable />);

        //assertions
        expect(screen.getByTestId("row")).toBeInTheDocument();

        expect(
          screen.queryByTestId("user-profile-card"),
        ).not.toBeInTheDocument();
      });

      describe("custom hook integration", () => {
        it("invokes useUserProfilesByUserRoleValue with Operational Staff role", () => {
          //arrange
          mockHookReturn();
          //act
          render(<OperationalStaffUserProfileTable />);

          //assertions
          expect(useUserProfilesByUserRoleValue).toHaveBeenCalledWith(
            ROLE_CONSTANTS.operationalStaff,
          );
        });

        it("invokes useUserProfilesByUserRoleValue on render", () => {
          //arrange
          mockHookReturn();
          //act
          render(<OperationalStaffUserProfileTable />);

          //assertions
          expect(useUserProfilesByUserRoleValue).toHaveBeenCalledTimes(1);
        });
      });

      describe("edge cases", () => {
        it("should able to render single user profile", () => {
          //arrange
          mockHookReturn({
            userProfiles: [
              {
                id: "888",
                name: "Test operaional man",
              },
            ],
            loading: false,
          });

          render(<OperationalStaffUserProfileTable />);

          //assertions
          expect(screen.getAllByTestId("user-profile-card")).toHaveLength(1);
          expect(screen.getByText("Test operaional man")).toBeInTheDocument();
          expect(screen.getByTestId("user-profile-card")).toHaveAttribute(
            "data-id",
            "888",
          );
        });

        it("no existing user profiles should  display on Dom when loading is true", () => {
          //arrange
          mockHookReturn({
            profiles: mockUserProfiles,
            loading: true,
          });
          //act
          render(<OperationalStaffUserProfileTable />);

          //assertions
          expect(screen.getByTestId("spinner")).toBeInTheDocument();

          expect(
            screen.queryByTestId("user-profiles-card"),
          ).not.toBeInTheDocument();
        });
      });
    });
  });
});
