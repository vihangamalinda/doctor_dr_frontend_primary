import { useEffect,useRef,useState} from "react";
import { useFormContext } from "react-hook-form";
import FormRow from '../../ui/secondary-ui/FormRow';
import styled from 'styled-components';

function ImageInputFormRow() {
    const { register,watch, formState } = useFormContext();
    const { errors } = formState;

    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);
    const imageFiles = watch("image"); // FileList

    useEffect(() => {
      if (imageFiles && imageFiles.length > 0) {
        const file = imageFiles[0];
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl); // cleanup
      }
    }, [imageFiles]);
      
    
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

  return (
    <>
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
        {<Error>{errors?.image?.message}</Error>}
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
        </>
      )}
    </>
  );
}

export default ImageInputFormRow;
