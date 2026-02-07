import styled from "styled-components";
import Label from './Label';
import FormRow from "./FormRow";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;


function CustomFormRow({ label, error, children }) {
  return (
    <FormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </FormRow>
  );
}

export default CustomFormRow;
