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
import styled from 'styled-components';

const createLocalDateTime =()=>{
  const now = new Date();

  const localDateTime = now
  .toISOString()
  .slice(0, 19);
  return localDateTime;
}

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

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
    const { register, handleSubmit,formState } = useForm();
    const {errors} =formState;
    console.log("formstate error",errors);

    function onSubmit(data){
        const createdUserProfileId =6;
        const requestedHelpData=createRequestedHelpData(data,createdUserProfileId);
        console.log("data",data);
        mutate(requestedHelpData);
    }

    function onError(err){
        console.log(err);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit,onError)}>
            <FormRow>
                <Label htmlFor='title'>Purpose of the request</Label>
                <Input  type="text" id="title" {...register("title", {required:"Title is required"})} />
                {errors?.title?.message && <Error>{errors.title.message}</Error>}
            </FormRow>
              <FormRow>
                <Label htmlFor='description'>Explain the situation</Label>
                <Textarea  type="text" id="description" {...register("description",{required:"Description is required"})} />
            </FormRow>
            <FormRow>
                <Button variation="primary" size="large" type="submit">Submit</Button>
            </FormRow>

        </Form>
    )
}
export default CreateRquest; 