import { useParams } from "react-router-dom";
import {
  Form,
  Heading,
  Input,
  Button,
  FormRowVertical,
  Row,
  SpinnerMini,
} from "../../ui/index.js";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack.js";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { useUpdatePassword } from "../user-profile/hooks/useUpdatePassword.js";

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 900px;
  border-radius: 20px;
  padding: 20px;
  background-color: var(--color-grey-200);
  border-bottom: 1px solid var(--color-grey-400);
  color: var(--color-grey-600);
`;

function UpdatePasswordForm() {
  const { userProfileId } = useParams();
  const navigateBack = useMoveBack();
  const methods = useForm();
  const { handleSubmit, formState, register } = methods;
  const { errors } = formState;
  const { updatePassword, isUpdating } = useUpdatePassword();

  const onSubmit = (formData) => {
    //   console.log(formData);
    const data = {
      userProfileId: userProfileId,
      newPassword: formData.password,
    };
    updatePassword(data);
  };
  const onError = (formErrors) => {};

  //   const isUpdatingPassword = false;

  return (
    <Row type="vertical">
      <Row type="horizontal">
        <Button variation="secondary" size="medium" onClick={navigateBack}>
          <HiMiniArrowSmallLeft />
          Go Back
        </Button>
      </Row>
      <Row type="horizontal-center">
        <Heading as="h1"> Update Password</Heading>
      </Row>
      <FormStyle>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormRowVertical label="Password" error={errors?.password?.message}>
            <Input
              type="password"
              id="password"
              //   disabled={isUpdatingPassword}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
          </FormRowVertical>
          <FormRowVertical
            label="Confirm Password"
            error={errors?.confirmPassword?.message}
          >
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm password",
                validate: (value, formValues) => {
                  return (
                    value === formValues.password || "Passwords do not match"
                  );
                },
              })}
            />
          </FormRowVertical>
          <Row>
            <Button
              variation="primary"
              type="submit"
              disabled={isUpdating}
              size="medium"
            >
              {isUpdating ? <SpinnerMini /> : "Update Password"}
            </Button>
          </Row>
        </Form>
      </FormStyle>
    </Row>
  );
}
export default UpdatePasswordForm;
