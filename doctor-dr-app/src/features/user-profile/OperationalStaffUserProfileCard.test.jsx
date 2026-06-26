import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import OperationalStaffProfileCard from "./OperationalStaffProfileCard";
import { LabelGroupStyle, LabelPrimary } from "../../ui";

//  Mocking the UI components with appropriate identifiers for test

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
  Button: ({ children, size, variation }) => (
    <button data-testid="button" data-size={size} data-variation={variation}>
      {children}
    </button>
  ),
}));

const mockUserProfile = {
  firstName: "Vihanga",
  lastName: "Malinda",

  createdDateTime: "2023-01-10",
  modifiedDateTime: "2024-04-20",

  hospital: {
    name: "Hemas Hospital",
    emergencyNumber: "119",
  },
};

const setup =(userProfile)=> render(<OperationalStaffProfileCard userProfile={userProfile}/>)

const { firstName, lastName, createdDateTime, modifiedDateTime, hospital } =
  mockUserProfile;

describe("OperationalStaffProfileCard", () => {
  it("should render user's full name by combining user's firstName and lastName", () => {
    // arrange & action
    setup(mockUserProfile);

    // assertion
    const expectedFullName = `${firstName} ${lastName}`;
    expect(screen.getByText(expectedFullName)).toBeInTheDocument();
  });

  it("should render user profile created and modified dates", () => {
    // arrange & action
    setup(mockUserProfile);

    // assertion
    expect(screen.getByText(createdDateTime)).toBeInTheDocument();
    expect(screen.getByText(modifiedDateTime)).toBeInTheDocument();
  });

  it("should render user profile's responsible hospital information", () => {
    // arrange & action
    setup(mockUserProfile);

    // assertion
    expect(screen.getByText(hospital.name)).toBeInTheDocument();
    expect(screen.getByText(hospital.emergencyNumber)).toBeInTheDocument();
  });

  it("should render the delete button", () => {
    //
    setup(mockUserProfile);

    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  it("should render four Row component in the dom", () => {
    setup(mockUserProfile);

    expect(screen.getAllByTestId("row")).toHaveLength(5);
  });

  it("should pass the correct Row types", () => {
    setup(mockUserProfile);

    const rows = screen.getAllByTestId("row");

    const propertyDataTypeName = "data-type";
    const horizontalStartValStr = "horizontal-start";
    const horizontalEndValStr = "horizontal-end";

    expect(rows[0]).toHaveAttribute(
      propertyDataTypeName,
      horizontalStartValStr,
    );
    expect(rows[1]).toHaveAttribute(
      propertyDataTypeName,
      horizontalStartValStr,
    );
    expect(rows[2]).toHaveAttribute(
      propertyDataTypeName,
      horizontalStartValStr,
    );
    expect(rows[3]).toHaveAttribute(
      propertyDataTypeName,
      horizontalStartValStr,
    );
    expect(rows[4]).toHaveAttribute(propertyDataTypeName, horizontalEndValStr);
  });

  it("should passes the correct props to the delete button", () => {
    setup(mockUserProfile);

    const button = screen.getByTestId("button");

    const propertyDataSizeName = "data-size";
    const mediumValueStr = "medium";
    const propertyDataVariationName = "data-variation";
    const dangerValueStr = "danger";

    expect(button).toHaveAttribute(propertyDataSizeName, mediumValueStr);

    expect(button).toHaveAttribute(propertyDataVariationName, dangerValueStr);
  });

  it("should render two LabelGroupStyle components", () => {
    setup(mockUserProfile);

    expect(screen.getAllByTestId("label-group")).toHaveLength(2);
  });
});
