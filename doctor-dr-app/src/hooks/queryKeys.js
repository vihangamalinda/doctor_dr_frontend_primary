const MAIN_KEY = ["hospitals"];

const GET_ALL_INTERNAL_HOSPITALS =(isInternalHospital)=>[...MAIN_KEY,"byInternalHospital",isInternalHospital];

const GET_ALL_REGULAR_HOSPITALS =(isInternalHospital) =>[...MAIN_KEY,"byRegularHospital",isInternalHospital];

export {
    MAIN_KEY,
    GET_ALL_INTERNAL_HOSPITALS,
    GET_ALL_REGULAR_HOSPITALS,
}