const SORT_BY_FILTER = "sort-by";

const PATIENT_REFERNACE_ID_FIELD_NAME = "patientReferenceId";

const CREATED_DATE_TIME_FILED_NAME = "createdDateTime";
const ASC_DRIECTION = "asc";
const DSC_DIRECTION = "dsc";

const submissionSortByFilters = [
  {
    value: "name-asc",
    label: "Sort by name (A-Z)",
    direction: ASC_DRIECTION,
    filedName: PATIENT_REFERNACE_ID_FIELD_NAME,
  },
  {
    value: "name-dsc",
    label: "Sort by name (Z-A)",
    direction: DSC_DIRECTION,
    filedName: PATIENT_REFERNACE_ID_FIELD_NAME,
  },
  {
    value: "createdDateTime-asc",
    label: "Oldest",
    direction: ASC_DRIECTION,
    filedName: CREATED_DATE_TIME_FILED_NAME,
  },
  {
    value: "createdDateTime-dsc",
    label: "Latest",
    direction: DSC_DIRECTION,
    filedName: CREATED_DATE_TIME_FILED_NAME,
  },
];
const getFilterValue = (filter) => filter?.value;

const isExpectedSortedInstruction = (inputFilter, expectedInstruction) =>
  inputFilter === expectedInstruction?.value;

const validateFilter = (filteredValue) =>
  filteredValue || submissionSortByFilters[3].value;

const createInstruction = (value, performSortFn) => {
  return {
    value: value,
    performSort: performSortFn,
  };
};

const getDateSortFn = (sortFieldName, modifier) => {
  return (a, b) =>
    (Date.parse(a[sortFieldName]) - Date.parse(b[sortFieldName])) * modifier;
};
const getStringSortFn = (sortFieldName, modifier) => {
  return (a, b) =>
    a[sortFieldName].localeCompare(b[sortFieldName], undefined, {
      sensitivity: "base", // case-insensitive
    }) * modifier;
};

const getSortFn = (filter) => {
  const sortField = filter.filedName;
  const isASC = filter.direction === ASC_DRIECTION;
  const modifier = isASC ? 1 : -1;
  let sortFn = null;

  if (CREATED_DATE_TIME_FILED_NAME === sortField) {
    sortFn = getDateSortFn(sortField, modifier);
  } else if (PATIENT_REFERNACE_ID_FIELD_NAME === sortField) {
    sortFn = getStringSortFn(sortField, modifier);
  } else {
    sortFn = (a, b) => (a[sortField] - b[sortField]) * modifier;
  }

  return sortFn;
};

const performSortBy = (submissionList, filter) => {
  return submissionList.sort(getSortFn(filter));
};

const getSortInstructions = () => {
  const firstFilter = submissionSortByFilters[0];
  const secondFilter = submissionSortByFilters[1];
  const thirdFilter = submissionSortByFilters[2];
  const fourthFilter = submissionSortByFilters[3];

  const instructions = [
    createInstruction(getFilterValue(firstFilter), (submissions) =>
      performSortBy(submissions, firstFilter),
    ),
    createInstruction(getFilterValue(secondFilter), (submissions) =>
      performSortBy(submissions, secondFilter),
    ),
    createInstruction(getFilterValue(thirdFilter), (submissions) =>
      performSortBy(submissions, thirdFilter),
    ),
    createInstruction(getFilterValue(fourthFilter), (submissions) =>
      performSortBy(submissions, fourthFilter),
    ),
  ];

  return instructions;
};

const getSortedSubmissions = (submissions, inputFilter) => {
  const validatedFilter = validateFilter(inputFilter);
  //   console.log(validatedFilter)

  const sortedInstructions = getSortInstructions();
  let sortedSubmissions = [];

  for (const instruction of sortedInstructions) {
    const isExpectedInstruction = isExpectedSortedInstruction(
      validatedFilter,
      instruction,
    );
    //     console.log("isExpectedInstruction",isExpectedInstruction);
    if (isExpectedInstruction) {
      sortedSubmissions = instruction.performSort(submissions);
      break;
    }
  }

  return sortedSubmissions;
};

export { getSortedSubmissions, SORT_BY_FILTER, submissionSortByFilters };
