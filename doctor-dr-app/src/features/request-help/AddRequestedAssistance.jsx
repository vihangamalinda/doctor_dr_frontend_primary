import { FormProvider, useForm } from "react-hook-form";
// import CustomFormRow from "../../ui/secondary-ui/CustomFormRow.jsx";
// import Form from "../../ui/secondary-ui/Form";
// import Textarea from "../../ui/secondary-ui/TextArea";
// import Button from "../../ui/secondary-ui/Button.jsx";
// import SelectorWithinForm from "../../ui/secondary-ui/SelectorWithinForm.jsx";
// import Row from "../../ui/secondary-ui/Row.jsx";
import { useContacts } from "../contact/hooks/index.js";
// import Spinner from "../../ui/secondary-ui/Spinner.jsx";
// import Heading from "../../ui/secondary-ui/Heading.jsx";
import { useSelector } from "react-redux";
import { selectCurrentLoggedUserProfileId } from "../authentication/store/selectors/CurrentLoggedUserSelectors.js";
import { useRequestedHelpAddFeedBackById } from "./hooks/useRequestedHelpAddFeedBackById.js";
import { useParams } from "react-router-dom";
import {
  CustomFormRow,
  Form,
  TextArea,
  Button,
  SelectorWithinForm,
  Row,
  Spinner,
  Heading,
} from "../../ui/index.js";

function reFormatSelectorOptions(arr) {
  if (!arr) return [];
  const createOptionData = (obj) => ({
    id: obj.id,
    name: `${obj.firstName} ${obj.lastName}`,
  });
  return arr.map((obj) => createOptionData(obj));
}

function updateRequestedHelpData(data, reviewedByUserProfileId) {
  return {
    feedback: data.feedback,
    contactId: Number(data.contactId),
    reviewedByUserProfileId: reviewedByUserProfileId,
  };
}

function AddRequestedAssistance() {
  const { allContacts, isAllContactsLoading, error } = useContacts();
  const currentLoggedUserProfileId = useSelector(
    selectCurrentLoggedUserProfileId,
  );
  const { addRequestedHelp, isAddingFeedback } =
    useRequestedHelpAddFeedBackById();
  const { requestedHelpId } = useParams();

  const methods = useForm();
  const { register, handleSubmit, formState, reset } = methods;
  const { errors } = formState;

  function onSubmit(formData) {
    console.log(formData, currentLoggedUserProfileId);
    // after api call
    const data = updateRequestedHelpData(formData, currentLoggedUserProfileId);
    console.log(data);
    addRequestedHelp({ id: requestedHelpId, feedbackInfor: data });
    reset();
  }
  function onError(err) {}

  if (isAllContactsLoading) return <Spinner />;

  const optionList = reFormatSelectorOptions(allContacts);

  return (
    <>
      <Heading as="h2"> Feedback section</Heading>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <CustomFormRow
            label="Provide Feedback"
            error={errors?.feedback?.message}
            isVerticalView={true}
          >
            <TextArea
              type="text"
              id="feedback"
              {...register("feedback", { required: "Feedback is required" })}
            />
          </CustomFormRow>
          <CustomFormRow
            label="Provide contact"
            error={errors?.feedback?.message}
            isVerticalView={false}
          >
            <SelectorWithinForm
              identifier="contactId"
              requiredMessage="Please select a contact person."
              optionList={optionList}
              displayMessage="select a contact"
            />
          </CustomFormRow>
          <Row type="horizontal-end">
            <Button
              variation="primary"
              size="large"
              type="submit"
              disabled={isAddingFeedback}
            >
              {" "}
              Add Feedback{" "}
            </Button>
          </Row>
        </Form>
      </FormProvider>
    </>
  );
}
export default AddRequestedAssistance;
