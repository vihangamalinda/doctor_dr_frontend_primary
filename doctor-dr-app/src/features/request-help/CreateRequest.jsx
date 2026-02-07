import { useForm } from 'react-hook-form';
import Form from "../../ui/secondary-ui/Form";
import Label from '../../ui/secondary-ui/Label';
import Input from '../../ui/secondary-ui/Input';
import FormRow from '../../ui/secondary-ui/FormRow';
import Textarea from '../../ui/secondary-ui/TextArea';
import Button from '../../ui/secondary-ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {createRequestHelp} from "../../services/apis/apiRequestHelp.js"

const createLocalDateTime =()=>{
  const now = new Date();

  const localDateTime = now
  .toISOString()
  .slice(0, 19);
  return localDateTime;
}

const createRequestedHelpData =(data,createdUserProfileId)=>{
    const {title,description} =data;

    return {
        title,
        description,
        createdDateTime:createLocalDateTime(),
        createdByUserProfile:{
            id:createdUserProfileId
        },
    }
}
function CreateRquest(){
    const queryClient =useQueryClient();
    const {mutate,isLoading} =useMutation({
        mutationFn:createRequestHelp,
        onSuccess:()=>{
            toast.success("created the request");
            queryClient.invalidateQueries({queryKey:["requested-helps"]})
        },
        onError:(error)=>{
            toast.error(error);
        }
    })
    const { register, handleSubmit } = useForm();

    function onSubmit(data){
        const createdUserProfileId =6;
        const requestedHelpData=createRequestedHelpData(data,createdUserProfileId);
        console.log("data",data);
        mutate(requestedHelpData);
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