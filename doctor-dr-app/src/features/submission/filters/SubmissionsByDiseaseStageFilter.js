export const diseaseStageClientFilters = [
  { value: "all", label: "All Stages", diseaseLevel: -1 },
  { value: "healthy", label: "Healthy", diseaseLevel: 0 },
  { value: "disease-stage-01", label: "Disease stage 01", diseaseLevel: 1 },
  { value: "disease-stage-02", label: "Disease stage 02", diseaseLevel: 2 },
  { value: "disease-stage-03", label: "Disease stage 03", diseaseLevel: 3 },
  { value: "disease-stage-04", label: "Disease stage 04", diseaseLevel: 4 },
  { value: "disease-stage-05", label: "Disease stage 05", diseaseLevel: 5 },
];
export const validateFilter = (filter) => {
  if (filter) return filter;

  return diseaseStageClientFilters[0]?.value;
};
const hasDiseaseLevel = (submission, filter) => {
  const diseaseLevel = submission?.diseaseStage?.diseaseLevel;
  return diseaseLevel === filter?.diseaseLevel;
};

const isExpectedFilter = (inputFilter, expectedFilter) =>
  inputFilter === expectedFilter?.value;

export const getFilteredSubmission = (allSubmssions, filteredValue) => {
  const validatedFilteredValue = validateFilter(filteredValue);
  let filteredSubmission = [];

  const isAllFilter = isExpectedFilter(
    validatedFilteredValue,
    diseaseStageClientFilters[0],
  );
  const isHealthyFilter = isExpectedFilter(
    validatedFilteredValue,
    diseaseStageClientFilters[1],
  );
  const isFirstDiseaseStageFilter = isExpectedFilter(
    validatedFilteredValue,
    diseaseStageClientFilters[2],
  );
  const isSecondDiseaseStageFilter = isExpectedFilter(
    validatedFilteredValue,
    diseaseStageClientFilters[3],
  );
  const isThirdDiseaseStageFilter = isExpectedFilter(
    validatedFilteredValue,
    diseaseStageClientFilters[4],
  );
  const isFourthDiseaseStageFilter = isExpectedFilter(
    validatedFilteredValue,
    diseaseStageClientFilters[5],
  );
  const isFifthDiseaseStageFilter = isExpectedFilter(
    validatedFilteredValue,
    diseaseStageClientFilters[6],
  );
  const isSixithDiseaseStageFilter = isExpectedFilter(
    validatedFilteredValue,
    diseaseStageClientFilters[7],
  );

  if (isAllFilter) {
    filteredSubmission = allSubmssions;
  } else {
    if (isHealthyFilter) {
      filteredSubmission = allSubmssions.filter((submission) =>
        hasDiseaseLevel(submission, diseaseStageClientFilters[1]),
      );
    } else if (isFirstDiseaseStageFilter) {
      filteredSubmission = allSubmssions.filter((submission) =>
        hasDiseaseLevel(submission, diseaseStageClientFilters[2]),
      );
    } else if (isSecondDiseaseStageFilter) {
      filteredSubmission = allSubmssions.filter((submission) =>
        hasDiseaseLevel(submission, diseaseStageClientFilters[3]),
      );
    } else if (isThirdDiseaseStageFilter) {
      filteredSubmission = allSubmssions.filter((submission) =>
        hasDiseaseLevel(submission, diseaseStageClientFilters[4]),
      );
    } else if (isFourthDiseaseStageFilter) {
      filteredSubmission = allSubmssions.filter((submission) =>
        hasDiseaseLevel(submission, diseaseStageClientFilters[5]),
      );
    } else if (isFifthDiseaseStageFilter) {
      filteredSubmission = allSubmssions.filter((submission) =>
        hasDiseaseLevel(submission, diseaseStageClientFilters[6]),
      );
    } else if (isSixithDiseaseStageFilter) {
      filteredSubmission = allSubmssions.filter((submission) =>
        hasDiseaseLevel(submission, diseaseStageClientFilters[7]),
      );
    }
  }
  return filteredSubmission;
};

export const DISEASE_STAGE_FILTER = "disease-stage";
