import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  border-radius: 50px;
  border: 1px solid;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="./assets/react.svg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;