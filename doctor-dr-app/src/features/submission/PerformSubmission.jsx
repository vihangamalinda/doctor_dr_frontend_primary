import { useForm, FormProvider } from "react-hook-form";
import Form from "../../ui/secondary-ui/Form";
import Input from "../../ui/secondary-ui/Input";
import Button from "../../ui/secondary-ui/Button";
import CustomFormRow from "../../ui/secondary-ui/CustomFormRow.jsx";
import ImageInputFormRow from "../../ui/secondary-ui/ImageInputFormRow.jsx";
import { useCreateSubmission } from "./hooks/useCreateSubmission.js";

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
  const  {createSubmission,isCreating} =useCreateSubmission();
  const methods = useForm();
  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  function onSubmit(data) {
    const userId = 6;
    const { patientReferenceId, image } = data;
    const submission = createSubmmisionData(patientReferenceId, image, userId);
    createSubmission(submission);
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
          <Button variation="primary" size="large" type="submit" disabled={isCreating}>
            Submit
          </Button>
        </CustomFormRow>
      </Form>
    </FormProvider>
  );
}

export default PerformSubmission;
