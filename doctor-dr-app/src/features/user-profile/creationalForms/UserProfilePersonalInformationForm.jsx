import { useFormContext } from "react-hook-form";
import LocationInformationForm from "./LocationInformationForm.jsx";
import Input from "../../../ui/secondary-ui/Input.jsx";
import CustomFormRow from "../../../ui/secondary-ui/CustomFormRow.jsx";

function UserProfilePersonalInformationForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <>
      <CustomFormRow label="First Name" error={errors?.firstName?.message}>
        <Input
          type="text"
          id="firstName"
          {...register("firstName", { required: "First name is required" })}
        />
      </CustomFormRow>
      <CustomFormRow label="Last Name" error={errors?.lastName?.message}>
        <Input
          type="text"
          id="lastName"
          {...register("lastName", { required: "Last name is required" })}
        />
      </CustomFormRow>
      
      <LocationInformationForm />
    </>
  );
}

export default UserProfilePersonalInformationForm;
