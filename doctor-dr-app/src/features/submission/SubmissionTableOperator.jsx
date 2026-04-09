import TableOperations from "../../ui/secondary-ui/TableOperations.jsx";
import Filter from "../../ui/secondary-ui/Filter.jsx";
import {
  diseaseStageClientFilters,
  DISEASE_STAGE_FILTER,
} from "./filters/SubmissionsByDiseaseStageFilter.js";
import SortBy from "../../ui/secondary-ui/SortBy.jsx";
import { submissionSortByFilters } from "./filters/SubmissionsSortByFilter.js";
import { SORT_BY_FILTER } from "./filters/SubmissionsSortByFilter.js";

function SubmissionTableOperator() {
  return (
    <TableOperations>
      <Filter
        filterField={DISEASE_STAGE_FILTER}
        options={diseaseStageClientFilters}
      />
      <SortBy sortByFilted={SORT_BY_FILTER} oprions={submissionSortByFilters} />
    </TableOperations>
  );
}
export default SubmissionTableOperator;
