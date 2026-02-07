import styled from 'styled-components';
import SubmissionRow from './SubmissionRow';
import { useQuery } from '@tanstack/react-query';
import {getAllSubmissionsByUserProfileId} from "../../services/apis/apiSubmission.js";
import Spinner from '../../ui/secondary-ui/Spinner.jsx';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns:   2fr 1.3fr 1.5fr 1.7fr 1.7fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const createSubmissions =(submissionId,patientReferenceId,createdDate,hasDisease,diseaseStage)=>{
   return {
        submissionId,
        patientReferenceId,
        createdDate,
        hasDisease,
        
        diseaseStage,
    }
}
const submissionList =[
    createSubmissions(1,"4","2019-18-07",true,{name:"stage_2"}),
    createSubmissions(2,"3","2019-18-07",true,{name:"stage_2"}),
    createSubmissions(4,"5","2019-18-07",true,{name:"stage_2"}),
    createSubmissions(5,"6","2019-18-07",true,{name:"stage_2"}),
    createSubmissions(6,"7","2019-18-07",true,{name:"stage_2"}),
]

console.log(submissionList);
const userProfileId=6;

function SubmissionTable(){
  const {data,isLoading,error} = useQuery({
    queryKey:["submissions"],
    queryFn:()=>getAllSubmissionsByUserProfileId(userProfileId)
  });
    if(isLoading) return <Spinner/>

    return (
      <Table>
        <TableHeader>
          <div>patient Referance Id</div>
          <div>createdDate</div>
          <div>hase Disease</div>
          <div>diseaseStage</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>

        {data.map((submission) => (
          <SubmissionRow submissionData={submission} key={submission.submissionId} />
        ))}
      </Table>
    );

}
export default SubmissionTable;