import { useFormContext } from "react-hook-form";
import CustomFormRow from "../../../ui/secondary-ui/CustomFormRow.jsx";
import Input from "../../../ui/secondary-ui/Input.jsx";

function UserProfileAccountInformationForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <>
      <CustomFormRow label="Username" error={errors?.username?.message}>
        <Input
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
        />
      </CustomFormRow>
      <CustomFormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="text"
          id="username"
          {...register("email", { required: "Email address is required" })}
        />
      </CustomFormRow>
    </>
  );
}
export default UserProfileAccountInformationForm;
