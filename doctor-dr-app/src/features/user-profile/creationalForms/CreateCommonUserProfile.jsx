import { useForm, FormProvider } from "react-hook-form";
// import Form from "../../../ui/secondary-ui/Form.jsx";
// import CustomFormRow from "../../../ui/secondary-ui/CustomFormRow.jsx";
// import Button from "../../../ui/secondary-ui/Button.jsx";
// import SelectorWithinForm from "../../../ui/secondary-ui/SelectorWithinForm.jsx";
import UserProfilePersonalInformationForm from "./UserProfilePersonalInformationForm.jsx";
import { useRegularHospital } from "../../../hooks/useRegularHospital.js";
// import Spinner from "../../../ui/secondary-ui/Spinner.jsx";
// import Input from "../../../ui/secondary-ui/Input.jsx";
import UserProfileAccountInformationForm from "./UserProfileAccountInformationForm.jsx";
import CreateUserProfileForm from "./CreateUserProfileForm.jsx";
import { useCommonUserRole } from "../../user-role/helper/index.js";
import { createData } from "./creationalData.js";
import { useCreateUserProfile } from "../hooks/useCreateUserProfile.js";
import toast from "react-hot-toast";
import {
  Form,
  CustomFormRow,
  Button,
  SelectorWithinForm,
  Spinner,
  Input,
} from "../../../ui/index.js";

function CreateCommonUserProfile() {
  const methods = useForm();
  const { register, handleSubmit, formState, reset } = methods;
  const { errors } = formState;

  const {
    allRegularHospital,
    isAllRegularHospitalLoading,
    error: errorOnRegularHospitals,
  } = useRegularHospital();

  const {
    userRoleByUserRoleValue,
    isUserRoleLoading,
    error: errorOnCommonUserRole,
  } = useCommonUserRole();

  const { createUserProfile, isCreating } = useCreateUserProfile();
  const onSubmit = (formData) => {
    const userRoleId = userRoleByUserRoleValue.id;
    const data = createData(formData, userRoleId);
    createUserProfile(data);
    reset();
  };
  const onError = (e) => {
    toast.error("error occured please try again.");
  };

  if (isAllRegularHospitalLoading || isUserRoleLoading) {
    return <Spinner />;
  }

  return (
    <CreateUserProfileForm
      onSubmit={onSubmit}
      onError={onError}
      isCreating={isCreating}
    >
      <CustomFormRow
        label="Select Responsible Hospital"
        error={errors?.hospitalId?.message}
      >
        <SelectorWithinForm
          identifier="hospitalId"
          optionList={allRegularHospital}
          requiredMessage="Hospital should be selected"
          displayMessage="Select Hospital"
        ></SelectorWithinForm>
      </CustomFormRow>
    </CreateUserProfileForm>
  );
}

export default CreateCommonUserProfile;
