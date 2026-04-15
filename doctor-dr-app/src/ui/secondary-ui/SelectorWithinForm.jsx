import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const SelectorStyled = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  font-size: 1.15rem;
  padding: 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
`;

function SelectorWithinForm({ identifier, requiredMessage, optionList ,displayMessage}) {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <SelectorStyled {...register(identifier, { required: requiredMessage })}>
      <option value="">{displayMessage}</option>
      {optionList.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </SelectorStyled>
  );
}

export default SelectorWithinForm;
