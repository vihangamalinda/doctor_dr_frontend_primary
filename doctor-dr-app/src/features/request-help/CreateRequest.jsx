import { useForm } from 'react-hook-form';
import Form from "../../ui/secondary-ui/Form";
import Label from '../../ui/secondary-ui/Label';
import Input from '../../ui/secondary-ui/Input';
import FormRow from '../../ui/secondary-ui/FormRow';
import Textarea from '../../ui/secondary-ui/TextArea';
import Button from '../../ui/secondary-ui/Button';

function CreateRquest(){
    const { register, handleSubmit } = useForm();

    function onSubmit(data){
        console.log("data",data);
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <Label htmlFor='title'>Purpose of the request</Label>
                <Input  type="text" id="title" {...register("title")} />
            </FormRow>
              <FormRow>
                <Label htmlFor='description'>Explain the situation</Label>
                <Textarea  type="text" id="description" {...register("description")} />
            </FormRow>
            <FormRow>
                <Button variation="primary" size="large" type="submit">Submit</Button>
            </FormRow>

        </Form>
    )
}
export default CreateRquest; 