import { useForm } from 'react-hook-form';
import Form from "../../ui/secondary-ui/Form";
import FormRow from "../../ui/secondary-ui/FormRow";
import Label from "../../ui/secondary-ui/Label"
import Textarea from '../../ui/secondary-ui/TextArea';
import Input from '../../ui/secondary-ui/Input';

function CreateIssue(){
    const { register, handleSubmit } = useForm();

    function onSubmit(data){
        console.log("data",data);
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
      </Form>
    );
}

export default CreateIssue;