import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Form from "../../ui/secondary-ui/Form";
import FormRow from "../../ui/secondary-ui/FormRow";
import Input from "../../ui/secondary-ui/Input";
import Label from "../../ui/secondary-ui/Label";
import Button from "../../ui/secondary-ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSubmission } from "../../services/apis/apiSubmission.js";
import toast from "react-hot-toast";
import CustomFormRow from "../../ui/secondary-ui/CustomFormRow.jsx";
import ImageInputFormRow from "../../ui/secondary-ui/ImageInputFormRow.jsx";

const FileInput = styled.input`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;
const createLocalDateTime = () => {
  const now = new Date();

  const localDateTime = now.toISOString().slice(0, 19);
  return localDateTime;
};

const createSubmmisionData = (patientReferenceId, image, userProfileId) => {
  const formData = new FormData();

  formData.append("patientReferenceId", patientReferenceId);
  formData.append("createdDateTime", createLocalDateTime());
  formData.append("multipartFileImage", image[0]);
  formData.append("userProfile.id", userProfileId);

  return formData;
};


function PerformSubmission() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createSubmission,
    onSuccess: () => {
      toast.success("created Submission");
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
    onError: (err) => {
      toast.error(err);
    },
  });
  const methods = useForm();
  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  function onSubmit(data) {
    const userId = 6;
    const { patientReferenceId, image } = data;
    const submission = createSubmmisionData(patientReferenceId, image, userId);
    mutate(submission);
  }


  function onError(err) {
    console.log(err);
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <CustomFormRow
          label="Patient Reference id"
          error={errors?.patientReferenceId?.message}
        >
          <Input
            type="text"
            id="patientReferenceId"
            {...register("patientReferenceId", {
              required: "Patient refernce Id is required",
            })}
          />
        </CustomFormRow>

        <ImageInputFormRow />

        <CustomFormRow>
          <Button variation="primary" size="large" type="submit">
            Submit
          </Button>
        </CustomFormRow>
      </Form>
    </FormProvider>
  );
}

export default PerformSubmission;
