import { useForm, FormProvider } from "react-hook-form";
import Form from "../../../ui/secondary-ui/Form.jsx";
import CustomFormRow from "../../../ui/secondary-ui/CustomFormRow.jsx";
import Button from "../../../ui/secondary-ui/Button.jsx";
import SelectorWithinForm from "../../../ui/secondary-ui/SelectorWithinForm.jsx";
import UserProfilePersonalInformationForm from "./UserProfilePersonalInformationForm.jsx";
import { createLocalDateTime } from "../../shared/DateTimeHelper.js";
import { useRegularHospital } from "../../../hooks/useRegularHospital.js";
import Spinner from "../../../ui/secondary-ui/Spinner.jsx";

function CreateCommonUserProfile() {
  const methods = useForm();
  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  const { allRegularHospital, isAllRegularHospitalLoading, error } =
    useRegularHospital();

  const onSubmit = (data) => {
    const currentDateTime = createLocalDateTime();
    data.dateTime = currentDateTime;
    console.log(data);
    console.log(errors);
  };
  const onError = () => {};

  if (isAllRegularHospitalLoading) {
    return <Spinner />;
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <UserProfilePersonalInformationForm />

        <CustomFormRow
          label="Select Responsible Hospital"
          error={errors?.hospitalId?.message}
        >
          <SelectorWithinForm
            identifier="hospitalId"
            optionList={allRegularHospital}
            requiredMessage="Hospital should be selected"
          ></SelectorWithinForm>
        </CustomFormRow>
        <CustomFormRow>
          <Button variation="primary" size="large" type="submit">
            Submit
          </Button>
        </CustomFormRow>
      </Form>
    </FormProvider>
  );
}

export default CreateCommonUserProfile;
