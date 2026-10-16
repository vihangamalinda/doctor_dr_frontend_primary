import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SubmissionClassProbability from "./SubmissionClassProbability";

const mockClassProbability = {
  class_01: 0.22,
  class_02: 0.597,
  class_03: 0.172,
  class_04: 0.002,
  class_05: 0.008,
  class_06: 0.001,
};

const setup = (classProbability = mockClassProbability) =>
  render(<SubmissionClassProbability classProbability={classProbability} />);

describe("SubmissionClassProbability", () => {
  describe("the table header", () => {
    it("should render correct table headings", () => {
      setup();

      expect(screen.getByText("Class Name")).toBeInTheDocument();
      expect(screen.getByText("Disease Stage")).toBeInTheDocument();
      expect(screen.getByText("Class Probability")).toBeInTheDocument();
    });
  });
  describe("class name column", () => {
    it("should render class names  correctly", () => {
      setup();

      expect(screen.getByText("class 01")).toBeInTheDocument();
      expect(screen.getByText("class 02")).toBeInTheDocument();
      expect(screen.getByText("class 03")).toBeInTheDocument();
      expect(screen.getByText("class 04")).toBeInTheDocument();
      expect(screen.getByText("class 05")).toBeInTheDocument();
      expect(screen.getByText("class 06")).toBeInTheDocument();
    });
  });

  describe("disease stage column", () => {
    it("should render disease stage column", () => {
      setup();

      expect(screen.getByText("Healthy")).toBeInTheDocument();
      expect(screen.getByText("Disease-stage 01")).toBeInTheDocument();
      expect(screen.getByText("Disease-stage 02")).toBeInTheDocument();
      expect(screen.getByText("Disease-stage 03")).toBeInTheDocument();
      expect(screen.getByText("Disease-stage 04")).toBeInTheDocument();
      expect(screen.getByText("Disease-stage 05")).toBeInTheDocument();
    });
  });

  describe("class probability column", () => {
    it("should render probability correctly", () => {
      setup();

      expect(
        screen.getByText(String(mockClassProbability["class_01"])),
      ).toBeInTheDocument();
      expect(
        screen.getByText(String(mockClassProbability["class_02"])),
      ).toBeInTheDocument();
      expect(
        screen.getByText(String(mockClassProbability["class_03"])),
      ).toBeInTheDocument();
      expect(
        screen.getByText(String(mockClassProbability["class_04"])),
      ).toBeInTheDocument();
      expect(
        screen.getByText(String(mockClassProbability["class_05"])),
      ).toBeInTheDocument();
      expect(
        screen.getByText(String(mockClassProbability["class_06"])),
      ).toBeInTheDocument();
    });
  });

  describe("correct probability value & disease stage per class", () => {
    const performAssertion = (className, expectedProbability) => {
      const classElement = screen.getByText(className);
      const parentElement = classElement.parentElement;
      expect(parentElement).toHaveTextContent(String(expectedProbability));
    };

    it("should display correct probability per class", () => {
      setup();

      performAssertion("class 01", 0.22);
      performAssertion("class 02", 0.597);
      performAssertion("class 03", 0.172);
      performAssertion("class 04", 0.002);
      performAssertion("class 05", 0.008);
      performAssertion("class 06", 0.001);
    });
    it("should display correct disease stage per class", () => {
      setup();

      performAssertion("class 01", "Healthy");
      performAssertion("class 02", "Disease-stage 01");
      performAssertion("class 03", "Disease-stage 02");
      performAssertion("class 04", "Disease-stage 03");
      performAssertion("class 05", "Disease-stage 04");
      performAssertion("class 06", "Disease-stage 05");
    });
  });
});
