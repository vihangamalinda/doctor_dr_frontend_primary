import styled from "styled-components";
import Label from "./Label";
import FormRow from "./FormRow";
import Row from "./Row";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

// const

function CustomFormRow({ label, error, children, isVerticalView }) {
  if (isVerticalView) {
    return (
      <Row type="vertical">
        {label && <Label htmlFor={children.props.id}>{label}</Label>}
        {children}
        {error && <Error>{error}</Error>}
      </Row>
    );
  }

  return (
    <FormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </FormRow>
  );
}

export default CustomFormRow;
