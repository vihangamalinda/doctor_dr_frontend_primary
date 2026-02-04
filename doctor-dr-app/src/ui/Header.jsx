import { styled } from 'styled-components';


const StyledHeader = styled.header`
  font-weight: 900;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return <StyledHeader>Doctor DR</StyledHeader>;
}

export default Header;
