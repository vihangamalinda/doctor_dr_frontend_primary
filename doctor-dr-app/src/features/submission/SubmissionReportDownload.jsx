import { jsPDF } from "jspdf";
// import Button from "../../ui/secondary-ui/Button";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { createSubmissionReport } from "./SubmissionReportHelper.js";
import {Button} from "../../ui/index.js";

const handleDownloadPdf = ({ prediction }) => {
  createSubmissionReport({ prediction });
};

function SubmissionReportDownload({ prediction }) {
  return (
    <Button
      variation="download"
      size="large"
      onClick={() => handleDownloadPdf({ prediction })}
    >
      <HiOutlineArrowDownTray /> Download Prediction Report
    </Button>
  );
}

export default SubmissionReportDownload;
