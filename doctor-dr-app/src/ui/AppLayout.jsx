// import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Submissions from '../pages/Submissions';
import Header from './Header';
import Sidebar from './Sidebar';
import { styled } from 'styled-components';
// import ImageInput from "../features/submission/PerformSubmission";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          {/* <Outlet /> */}
          {/* After configuring router */}
          {/* <Dashboard/> */}
          {/* <Submissions/> */}
          {/* <ImageInput/> */}
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
export default AppLayout;