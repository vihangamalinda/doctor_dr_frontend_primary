import { useForm } from 'react-hook-form';
import Form from "../../ui/secondary-ui/Form";
import FormRow from "../../ui/secondary-ui/FormRow";
import Label from "../../ui/secondary-ui/Label"
import Textarea from '../../ui/secondary-ui/TextArea';
import Input from '../../ui/secondary-ui/Input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {createReportIssue} from "../../services/apis/apiReportIssue.js";
import Button from '../../ui/secondary-ui/Button.jsx';

const createLocalDateTime =()=>{
  const now = new Date();

  const localDateTime = now
  .toISOString()
  .slice(0, 19);
  return localDateTime;
}

const createReportedIssueData = (data, userProfileId) => {
  const { title, description } = data;

  return {
    title,
    description,
    userProfile: {
      id: userProfileId,
    },
    createdDateTime: createLocalDateTime(),
  };
};
const userProfileId =6;
function CreateIssue(){
    const { register, handleSubmit } = useForm();
    const quertClient =useQueryClient();
    const {mutate,isLoading} = useMutation({
      mutationFn:createReportIssue,
      onSuccess:()=>{
        toast.success("Create an issue");
        quertClient.invalidateQueries({queryKey:["reported-issues"]})
      },
      onError:(err)=>{
        toast.error(err);
      }
    })

    function onSubmit(data){
        console.log("data",data);
        const reportedIssueData =createReportedIssueData(data,userProfileId);
        mutate(reportedIssueData);
    }

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Label htmlFor="title">Subject of the issue</Label>
          <Input type="text" id="title" {...register("title")} />
        </FormRow>
        <FormRow>
          <Label htmlFor="description">
            Please explain the issue that you needed to repot.
          </Label>
          <Textarea
            type="text"
            id="description"
            defaultValue=""
            {...register("description")}
          />
        </FormRow>
        <FormRow>
          <Button variation="primary" size="large" type="submit">
            Submit
          </Button>
        </FormRow>
      </Form>
    );
}

export default CreateIssue;