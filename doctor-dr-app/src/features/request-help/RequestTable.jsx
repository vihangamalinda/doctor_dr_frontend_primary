import styled from 'styled-components';
import RequestCard from './RequestCard';
import Row from '../../ui/secondary-ui/Row';
import { useQuery } from '@tanstack/react-query';
import {getRequestedHelpsByCreatedUserProfileId} from "../../services/apis/apiRequestHelp.js";
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

function createRequest(id,title,description,feedback,contactInfor){
    return {
        id,
        title,
        description,
        feedback,
        contactInfor
    }
}
const dummyContactInfor = [
  { name: "adsd", contactNumber: "help@gmail.com" },
  { name: "adsdhfs", contactNumber: "help1@gmail.com" },
  { name: "gheadsd", contactNumber: "help2@gmail.com" },
  { name: "bnmadsd", contactNumber: "help3@gmail.com" },
];
const lengthyMessage = `agasddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaxcxcxcffffffffffffffaaaaaaaaaaaasdsadww eewdads  asdasdasdasdasdasdasddadsdavxxc
 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
`

const dummyRequest = [
    createRequest(2,"title 1", lengthyMessage ,lengthyMessage,dummyContactInfor[0]),
    createRequest(5,"title 1", lengthyMessage ,lengthyMessage,dummyContactInfor[1]),
    createRequest(8,"title 1", lengthyMessage ,lengthyMessage,dummyContactInfor[2]),
    createRequest(11,"title 1", lengthyMessage ,"ad3413",dummyContactInfor[3]),
]

const createdUserProfileId = 6;
function RequestTable(){
    const {data,isLoading,error} = useQuery({
        queryKey:["requested-helps"],
        queryFn: ()=>getRequestedHelpsByCreatedUserProfileId(createdUserProfileId),
    });
    if(isLoading){
        return <Spinner/>
    }

    return (
        <Row type="vertical">
        {data.map(request=> <RequestCard request={request} key={request.id}/>)}
        </Row>
    )
}
export default RequestTable;