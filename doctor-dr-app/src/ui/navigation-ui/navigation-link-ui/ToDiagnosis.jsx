import StyledNavLink from "./StyledNavLink.jsx";
import {TO_DIAGNOSIS_PAGE} from "./NavigationConstants.js";
import {
  HiMiniEye,
} from "react-icons/hi2";

function ToDiagnosis(){
    return (
              <StyledNavLink to={TO_DIAGNOSIS_PAGE}>
                <HiMiniEye /> <span>Diagnosis</span>
              </StyledNavLink>
    )

}

export default ToDiagnosis;