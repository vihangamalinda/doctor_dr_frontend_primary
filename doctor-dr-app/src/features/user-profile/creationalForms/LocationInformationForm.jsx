import { useFormContext } from "react-hook-form";
import CustomFormRow from "../../../ui/secondary-ui/CustomFormRow.jsx";
import Input from "../../../ui/secondary-ui/Input.jsx";
import styled from "styled-components";

const LabelTitlePrimary = styled.label`
  font-weight: 900;
  overflow-wrap: break-word;
`;

function LocationInformationForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <>
      <CustomFormRow
        label="Location Index"
        error={errors?.locationIndex?.message}
      >
        <Input
          type="text"
          id="locationIndex"
          {...register("locationIndex", {
            required: "Location index is required",
          })}
        />
      </CustomFormRow>

      <CustomFormRow label="Road name" error={errors?.road?.message}>
        <Input
          type="text"
          id="road"
          {...register("road", { required: "Road name is required" })}
        />
      </CustomFormRow>

      <CustomFormRow label="City" error={errors?.city?.message}>
        <Input
          type="text"
          id="city"
          {...register("city", { required: "City is required" })}
        />
      </CustomFormRow>

      <CustomFormRow label="Country" error={errors?.country?.message}>
        <Input
          type="text"
          id="country"
          {...register("country", { required: "Country is required" })}
        />
      </CustomFormRow>

      <CustomFormRow label="Postal Code" error={errors?.postalCode?.message}>
        <Input
          type="text"
          id="postalCode"
          {...register("postalCode", { required: "Postal Code is required" })}
        />
      </CustomFormRow>
    </>
  );
}
export default LocationInformationForm;
