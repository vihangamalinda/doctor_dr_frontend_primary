import { DISEASE_STAGE_API_URLs } from "../apiConfigs.js";
import { getData, updateData, deleteData, createData } from "../apiHelper.js";

const getAllDiseaseStage = async () => {
  return await getData(DISEASE_STAGE_API_URLs.DISEASE_STAGE_PERFORM_GET_ALL);
};

const getDiseaseStageById = async (id) => {
  return await getData(
    DISEASE_STAGE_API_URLs.DISEASE_STAGE_PERFORM_GET_BY_ID(id),
  );
};

const createDiseaseStage = async (diseaseStageObj) => {
  const data = {
    obj: diseaseStageObj,
    url: DISEASE_STAGE_API_URLs.DISEASE_STAGE_PERFORM_CREATE,
  };
  return await createData(data);
};

const deleteDiseaseStageById = async (id) => {
  return await getData(
    DISEASE_STAGE_API_URLs.DISEASE_STAGE_PERFORM_DELETE_BY_ID(id),
  );
};

export {
  getAllDiseaseStage,
  getDiseaseStageById,
  createDiseaseStage,
  deleteDiseaseStageById,
};
