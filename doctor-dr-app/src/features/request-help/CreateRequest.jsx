import { useForm } from "react-hook-form";
import Form from "../../ui/secondary-ui/Form";
import Input from "../../ui/secondary-ui/Input";
import Textarea from "../../ui/secondary-ui/TextArea";
import Button from "../../ui/secondary-ui/Button";
import styled from "styled-components";
import CustomFormRow from "../../ui/secondary-ui/CustomFormRow.jsx";
import { useCreateRequestHelp } from "./hooks/useCreateRequestHelp.js";
import { selectCurrentLoggedUserProfileId } from "../authentication/store/selectors/CurrentLoggedUserSelectors.js";
import { useSelector } from "react-redux";

const createLocalDateTime = () => {
  const now = new Date();

  const localDateTime = now.toISOString().slice(0, 19);
  return localDateTime;
};

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const createRequestedHelpData = (data, createdUserProfileId) => {
  const { title, description } = data;

  return {
    title,
    description,
    createdDateTime: createLocalDateTime(),
    createdByUserProfile: {
      id: createdUserProfileId,
    },
  };
};
function CreateRquest() {
  const currentLoggedInUserProfileId = useSelector(
    selectCurrentLoggedUserProfileId,
  );

  const { register, handleSubmit, formState, reset } = useForm();
  const { createRequestHelp, isCreating } = useCreateRequestHelp();
  const { errors } = formState;

  function onSubmit(data) {
    const requestedHelpData = createRequestedHelpData(
      data,
      currentLoggedInUserProfileId,
    );
    // console.log("data", data);
    createRequestHelp(requestedHelpData);
    reset();
  }

  function onError(err) {
    console.log(err);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <CustomFormRow
        label="Purpose of the request"
        error={errors?.title?.message}
      >
        <Input
          type="text"
          id="title"
          {...register("title", { required: "Title is required" })}
        />
      </CustomFormRow>

      <CustomFormRow
        label="Explain the situation"
        error={errors?.description?.message}
      >
        <Textarea
          type="text"
          id="description"
          {...register("description", { required: "Description is required" })}
        />
      </CustomFormRow>
      <CustomFormRow>
        <Button
          variation="primary"
          size="large"
          type="submit"
          disabled={isCreating}
        >
          Submit
        </Button>
      </CustomFormRow>
    </Form>
  );
}
export default CreateRquest;
