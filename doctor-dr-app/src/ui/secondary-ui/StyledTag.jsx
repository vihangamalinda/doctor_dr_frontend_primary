import styled from "styled-components";

const StyledTag = styled.span`
  width: size-fit;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.5rem;
  border-radius: 100px;
  text-align: center;

  /* Assing colours dynamically by the inputed value */
  color: var(--color-${(props) => props.colourType}-700);
  background-color: var(--color-${(props) => props.colourType}-100);
`;

export default StyledTag;
