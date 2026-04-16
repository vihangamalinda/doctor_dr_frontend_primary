import styled from "styled-components";
import Button from "../../ui/secondary-ui/Button";
import { useNavigate } from "react-router-dom";

const TableRow = styled.div`
  display: grid;
  grid-template-columns:3fr 1fr 0.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const Information = styled.div`
    font-family: "Sono";
     text-align: center;
`
const TitleStyle =styled.div`
    font-family: "Sono";
     text-align: left;
     overflow: hidden;
`



function ReviewRequestedHelpsRow({requestedAssistance}) {
  const {id,title,description,status,isActive,createdDateTime}=requestedAssistance;
  const {name,value} =status;
  const navigate =useNavigate();

  const openMoreInformation=(requestedHelpId)=>{
    const url = `/requested-help/information/${requestedHelpId}`;
    navigate(url);
  }
  return (
    <TableRow>
      <TitleStyle>{title}</TitleStyle>
      <Information>{createdDateTime}</Information>
      <Button variation="secondary" onClick={()=>openMoreInformation(id)}>open</Button>
    </TableRow>
  );
}

export default ReviewRequestedHelpsRow;
