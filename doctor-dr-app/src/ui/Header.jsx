import { styled } from "styled-components";
import { Row } from "./index.js";
import { Heading } from "./index.js";
const StyledHeader = styled.header`
  font-weight: 900;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header({ children }) {
  return (
    <StyledHeader>
      <Row type="horizontal-space-around">
        <Heading as="h3">Doctor DR</Heading>
        {children}
      </Row>
    </StyledHeader>
  );
}

export default Header;
