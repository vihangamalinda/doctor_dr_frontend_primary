import { FormProvider, useForm } from "react-hook-form";
import UserProfileAccountInformationForm from "./UserProfileAccountInformationForm";
import UserProfilePersonalInformationForm from "./UserProfilePersonalInformationForm";
import CustomFormRow from "../../../ui/secondary-ui/CustomFormRow";
import Form from "../../../ui/secondary-ui/Form";
import Button from "../../../ui/secondary-ui/Button";

function CreateUserProfileForm({ children, onSubmit, onError, isCreating }) {
  const methods = useForm();
  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <UserProfileAccountInformationForm />
        <UserProfilePersonalInformationForm />

        {children}
        <CustomFormRow>
          <Button
            variation="primary"
            size="large"
            type="submit"
            isCreating={isCreating}
          >
            Submit
          </Button>
        </CustomFormRow>
      </Form>
    </FormProvider>
  );
}
export default CreateUserProfileForm;
