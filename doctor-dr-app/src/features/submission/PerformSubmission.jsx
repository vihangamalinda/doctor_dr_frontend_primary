
import styled from 'styled-components';
import { useRef,useEffect,useState } from "react";
import { useForm, } from 'react-hook-form';
import Form from '../../ui/secondary-ui/Form';
import FormRow from '../../ui/secondary-ui/FormRow';
import Input from '../../ui/secondary-ui/Input';
import Label from '../../ui/secondary-ui/Label';
import Button from '../../ui/secondary-ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {createSubmission} from "../../services/apis/apiSubmission.js"
import toast from 'react-hot-toast';

const FileInput = styled.input`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;
const createLocalDateTime =()=>{
  const now = new Date();

  const localDateTime = now
  .toISOString()
  .slice(0, 19);
  return localDateTime;
}

const createSubmmisionData = (patientReferenceId, image, userProfileId) => {

  const formData = new FormData();

  formData.append("patientReferenceId", patientReferenceId);
  formData.append("createdDateTime", createLocalDateTime());
  formData.append("multipartFileImage", image[0]);
  formData.append("userProfile.id", userProfileId);

  return formData;
};



function PerformSubmission() {
  const queryClient =useQueryClient();
  const {mutate,isLoading} = useMutation({
    mutationFn:createSubmission,
    onSuccess:()=>{
      toast.success('created Submission');
      queryClient.invalidateQueries({queryKey:["submissions"]})
    },
    onError:(err)=>{
      toast.error(err);
    },
    
  });

  const { register, watch, handleSubmit } = useForm();

  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const imageFiles = watch("image"); // FileList
  
  function onSubmit(data) {
    const userId =6;
    const {patientReferenceId, image}=data;
    const submission =createSubmmisionData(patientReferenceId,image,userId);
    console.log(submission);
    mutate(submission);
    console.log("form-data", data);
  }

  useEffect(() => {
    if (imageFiles && imageFiles.length > 0) {
      const file = imageFiles[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl); // cleanup
    }
  }, [imageFiles]);

  function onError (err){
    console.log(err);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)}>
      <FormRow>
        <Label htmlFor="name">Patient Reference id</Label>
        <Input type="text" id="name" {...register("patientReferenceId",{
          required:"Patient refernce Id is required"
        })} />
      </FormRow>
      <FormRow>
        <div
          onClick={() => fileInputRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            // handleFiles(e.dataTransfer.files);
          }}
          style={{
            border: "2px dashed #aaa",
            padding: "30px",
            cursor: "pointer",
          }}
        >
          Click or drag image here
          <input
            type="file"
            accept="image/*"
            {...register("image", {
              required: "Image is required",
            })}
            ref={(e) => {
              register("image").ref(e);
              fileInputRef.current = e;
            }}
            hidden
          />
        </div>
      </FormRow>
      {preview && (
        <>
          <FormRow>
            <img
              src={preview}
              alt="Preview"
              style={{ width: "200px", marginTop: "10px" }}
            />
          </FormRow>
          <FormRow>
            <Button variation="primary" size="large" type="submit">Submit</Button>
          </FormRow>
        </>
      )}
    </Form>
  );
}

export default PerformSubmission;

//  <div
//          onClick={() => fileInputRef.current.click()}
//          onDragOver={(e) => e.preventDefault()}
//          onDrop={(e) => {
//            e.preventDefault();
//            // handleFiles(e.dataTransfer.files);
//          }}
//          style={{
//            border: "2px dashed #aaa",
//            padding: "30px",
//            cursor: "pointer",
//          }}
//        >
//          Click or drag image here
//          <input
//            ref={fileInputRef}
//            type="file"
//            accept="image/*"
//            hidden
//            // onChange={(e) => handleFiles(e.target.files)
//            // }
//           //  {...register("image")}
//          />
//        </div>