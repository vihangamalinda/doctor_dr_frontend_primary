import styled ,{ css }from 'styled-components';

const Label = styled.label`
  font-weight: 500;
  ${(props) =>
    props.type === 'overflow-break-word' &&
    css`
      overflow-wrap: break-word;
    `}
`;

export default Label;