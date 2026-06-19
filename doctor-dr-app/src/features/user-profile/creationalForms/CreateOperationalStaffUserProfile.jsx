import { useForm, FormProvider } from "react-hook-form";
// import Form from "../../../ui/secondary-ui/Form.jsx";
// import CustomFormRow from "../../../ui/secondary-ui/CustomFormRow.jsx";
// import Button from "../../../ui/secondary-ui/Button.jsx";
// import SelectorWithinForm from "../../../ui/secondary-ui/SelectorWithinForm.jsx";
import UserProfilePersonalInformationForm from "./UserProfilePersonalInformationForm.jsx";
import { createLocalDateTime } from "../../shared/DateTimeHelper.js";
import { useInternalSystemHospital } from "../../../hooks/useInternalSystemHospital.js";
// import Spinner from "../../../ui/secondary-ui/Spinner.jsx";
import CreateUserProfileForm from "./CreateUserProfileForm.jsx";
import { useCreateUserProfile } from "../hooks/useCreateUserProfile.js";
import { useOperationalStaffRole } from "../../user-role/helper/userRoleHelper.js";
import { createData } from "./creationalData.js";
import {
  Form,
  CustomFormRow,
  Button,
  SelectorWithinForm,
  Spinner,
} from "../../../ui/index.js";

function CreateOperationalStaffUserProfile() {
  const methods = useForm();
  const { register, handleSubmit, formState, reset } = methods;
  const { errors } = formState;

  const { createUserProfile, isCreating } = useCreateUserProfile();
  const { userRoleByUserRoleValue, isUserRoleLoading, errorOnUserRole } =
    useOperationalStaffRole();

  const {
    allInternalSystemHospital,
    isAllInternalSystemHospitalLoading,
    errorOnInternalSystemHospital,
  } = useInternalSystemHospital();

  const onSubmit = (formData) => {
    const userRoleId = userRoleByUserRoleValue.id;
    const data = createData(formData, userRoleId);
    createUserProfile(data);
    reset();
  };
  const onError = () => {};

  if (isAllInternalSystemHospitalLoading || isUserRoleLoading) {
    return <Spinner />;
  }

  return (
    <CreateUserProfileForm onSubmit={onSubmit} onError={onError}>
      <CustomFormRow
        label="Select Responsible Hospital"
        error={errors?.hospitalId?.message}
      >
        <SelectorWithinForm
          identifier="hospitalId"
          optionList={allInternalSystemHospital}
          requiredMessage="Hospital should be selected"
          displayMessage="Select Hospital"
        ></SelectorWithinForm>
      </CustomFormRow>
    </CreateUserProfileForm>
  );
}
export default CreateOperationalStaffUserProfile;
