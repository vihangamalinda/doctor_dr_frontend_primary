import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import PerformSubmission from "./PerformSubmission";

vi.mock("./hooks/useCreateSubmission", () => ({
  useCreateSubmission: vi.fn(),
}));

vi.mock("./SubmissionPredictionResult", () => ({
  default: ({ prediction, resetSubmissionResult }) => (
    <div data-testid="submission-prediction-result">
      <span data-testid="prediction-id">{prediction.submissionId}</span>
      <button data-testid="reset-button" onClick={resetSubmissionResult}>
        Reset
      </button>
    </div>
  ),
}));

vi.mock("../../ui/index.js", async (importOriginal) => {
  const { useFormContext } = await import("react-hook-form");
  const actual = await importOriginal();

  return {
    ...actual,
    Form: ({ children, onSubmit }) => (
      <form data-testid="form" onSubmit={onSubmit}>
        {children}
      </form>
    ),
    Input: ({ type, id, ...rest }) => (
      <input data-testid={`input-${id}`} type={type} id={id} {...rest} />
    ),
    Button: ({ children, disabled, type, variation, size }) => (
      <button
        data-testid="button"
        data-variation={variation}
        data-size={size}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    ),
    CustomFormRow: ({ children, label, error }) => (
      <div data-testid="custom-form-row">
        {label && <label>{label}</label>}
        {error && <span data-testid="error-message">{error}</span>}
        {children}
      </div>
    ),
    ImageInputFormRow: () => {
      const { register } = useFormContext();
      return (
        <div data-testid="image-input-form-row">
          <input
            data-testid="input-image"
            type="file"
            accept="image/*"
            {...register("image")}
          />
        </div>
      );
    },
  };
});

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");

  return {
    ...actual,
    useSelector: vi.fn(() => 42),
  };
});

import { useCreateSubmission } from "./hooks/useCreateSubmission";
// import { createSubmission } from "../../services/apis/apiSubmission";
// import { ImageInputFormRow } from "../../ui";

const mockCreateSubmission = vi.fn();

const simulateFileUpload = async () => {
  const file = new File(["dummy"], "xray.png", { type: "image/png" });
  const fileInput = screen.getByTestId("input-image");
  await userEvent.upload(fileInput, file);
};

const mockHookReturn = ({ isCreating = false } = {}) => {
  useCreateSubmission.mockReturnValue({
    createSubmission: mockCreateSubmission,
    isCreating: isCreating,
  });
};

const mockDiagnosisResult = {
  submissionId: 1123,
  hasDisease: true,
  active: true,
};

const store = configureStore({
  reducer: { auth: (state = { userProfileId: 99 }) => state },
});

const setup = () =>
  render(
    <Provider store={store}>
      <PerformSubmission />
    </Provider>,
  );

describe("PerformSubmission", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("initial render of submission form", () => {
    it("should render the submission form on dom", () => {
      mockHookReturn();

      setup();

      expect(screen.getByTestId("form")).toBeInTheDocument();
    });

    it("should render the patient reference id input field", () => {
      mockHookReturn();

      setup();

      expect(
        screen.getByTestId("input-patientReferenceId"),
      ).toBeInTheDocument();
    });

    it("should render the image input field", () => {
      mockHookReturn();

      setup();

      expect(screen.getByTestId("image-input-form-row")).toBeInTheDocument();
    });

    it("should render the submit button", () => {
      mockHookReturn();

      setup();

      expect(screen.getByTestId("button")).toBeInTheDocument();
      expect(screen.getByText("Submit")).toBeInTheDocument();
    });

    it("should render the submit button with primary variation as type", () => {
      mockHookReturn();

      setup();

      expect(screen.getByTestId("button")).toHaveAttribute(
        "data-variation",
        "primary",
      );
    });
    it("should render the submit button with large as size", () => {
      mockHookReturn();

      setup();

      expect(screen.getByTestId("button")).toHaveAttribute(
        "data-size",
        "large",
      );
    });

    it("should not render the result of submission on inital rendering", () => {
      mockHookReturn();

      setup();

      expect(
        screen.queryByTestId("submission-prediction-result"),
      ).not.toBeInTheDocument();
    });

    it("should not be rendering the create message from toas when initial load", () => {
      mockHookReturn();

      setup();

      expect(
        screen.queryByText("Creating submission..."),
      ).not.toBeInTheDocument();
    });
  });

  describe("submit button state", () => {
    it("should not be disabled if there is no diagnosis on progress", () => {
      mockHookReturn({ isCreating: false });

      setup();

      expect(screen.getByTestId("button")).not.toBeDisabled();
    });

    it("should be disabled when diagnosis on progress", () => {
      mockHookReturn({ isCreating: true });

      setup();

      expect(screen.getByTestId("button")).toBeDisabled();
    });
  });

  describe("form level validation", () => {
    it("should disaply required erorr messages when submitting without a patient reference id", async () => {
      mockHookReturn();

      setup();

      await userEvent.click(screen.getByTestId("button"));

      const assertion = () =>
        expect(
          screen.getByText("Patient refernce Id is required"),
        ).toBeInTheDocument();

      await waitFor(assertion);
    });
  });
  it("should not be able to perform submission when the form is invalid", async () => {
    mockHookReturn();

    setup();

    await userEvent.click(screen.getByTestId("button"));

    const assertion = () => expect(mockCreateSubmission).not.toHaveBeenCalled();

    await waitFor(assertion);
  });

  describe("successfull diagnosis on submission", () => {
    it("should able to perform submission when the form data are valida", async () => {
      mockCreateSubmission.mockResolvedValue(mockDiagnosisResult);

      mockHookReturn();

      setup();

      await userEvent.type(
        screen.getByTestId("input-patientReferenceId"),
        "PATIENT_001",
      );

      await simulateFileUpload();

      await userEvent.click(screen.getByTestId("button"));

      const assertion = () => {
        expect(mockCreateSubmission).toHaveBeenCalledTimes(1);
        expect(mockCreateSubmission).toHaveBeenCalledWith(expect.any(FormData));
      };

      await waitFor(assertion);
    });

    it("should display the prediction results by hiding the form  after a successful submission", async () => {
      mockCreateSubmission.mockResolvedValue(mockDiagnosisResult);

      mockHookReturn();

      setup();

      await userEvent.type(
        screen.getByTestId("input-patientReferenceId"),
        "PATIENT_001",
      );

      await simulateFileUpload();

      await userEvent.click(screen.getByTestId("button"));

      const assertion = () => {
        expect(screen.queryByTestId("form")).not.toBeInTheDocument();
        expect(
          screen.getByTestId("submission-prediction-result"),
        ).toBeInTheDocument();
      };

      await waitFor(assertion);
    });

    it("should correctly pass the diagnosis result to submission prediction result", async () => {
      mockCreateSubmission.mockResolvedValue(mockDiagnosisResult);

      mockHookReturn();

      setup();

      await userEvent.type(
        screen.getByTestId("input-patientReferenceId"),
        "PATIENT_001",
      );

      await simulateFileUpload();

      await userEvent.click(screen.getByTestId("button"));

      const assertion = () =>
        expect(screen.getByTestId("prediction-id")).toHaveTextContent(
          String(mockDiagnosisResult.submissionId),
        );

      await waitFor(assertion);
    });
  });

  describe("form reset behaviour", () => {
    it("should display the form again and hide the result", () => async () => {
      mockCreateSubmission.mockResolvedValue(mockDiagnosisResult);

      mockHookReturn();

      setup();

      await userEvent.type(
        screen.getByTestId("input-patientReferenceId"),
        "PATIENT_001",
      );

      await userEvent.click(screen.getByTestId("button"));

      const assertionOne = () => {
        expect(
          screen.getByTestId("submission-prediction-result"),
        ).toBeInTheDocument();
      };
      await waitFor(assertionOne);

      await userEvent.click(screen.getByTestId("reset-button"));

      const assertionTwo = () => {
        expect(screen.getByTestId("form")).toBeInTheDocument();
        expect(
          screen
            .queryByTestId("submission-prediction-result")
            .not.toBeInTheDocument(),
        );
      };
      await waitFor(assertionTwo);
    });
  });
});
