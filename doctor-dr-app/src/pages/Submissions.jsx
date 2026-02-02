import SubmissionTable from '../features/submission/SubmissionTable';
import Heading from '../ui/secondary-ui/Heading';
import Row from '../ui/secondary-ui/Row';

function Submissions(){
    return (
        <>
         <Row type="horizontal">
        <Heading as="h1">Submissions by user</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row>
        <SubmissionTable />
      </Row>
        </>
    )
}
export default Submissions;