import { jsPDF } from "jspdf";
import Button from "../../ui/secondary-ui/Button";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const handleDownloadPdf = ({ prediction }) => {
  const {
    active,
    createdDateTime,
    diseaseStage,
    hasDisease,
    modelPredictionDetails,
    patientReferenceId,
    status,
    submissionId,
    userProfile,
  } = prediction;

  const { id, name: diseaseStageName, diseaseLevel } = diseaseStage;

  const {
    classProbability,
    message,
    overlayImage,
    originalInputImage,
    predictionIndex,
  } = modelPredictionDetails;

  const { id: statusId, name: StatusDefinition } = status;

  const firstClassProbability = `${classProbability["class_01"].toFixed(4)}`;
  const secondClassProbability = `${classProbability["class_02"].toFixed(4)}`;
  const thirdClassProbability = `${classProbability["class_03"].toFixed(4)}`;
  const fourthClassProbability = `${classProbability["class_04"].toFixed(4)}`;
  const fifthClassProbability = `${classProbability["class_05"].toFixed(4)}`;
  const sixthClassProbability = `${classProbability["class_06"].toFixed(4)}`;

  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Prediction Report", 20, 20);

  doc.setFontSize(12);

  doc.text("Patient Reference Id :", 20, 40);
  doc.text(patientReferenceId, 110, 40);

  doc.text("Created at :", 20, 50);
  doc.text(createdDateTime, 110, 50);

  doc.text("Disease stage name: ", 20, 60);
  doc.text(diseaseStageName, 110, 60);

  doc.text("diseaseLevel: ", 20, 70);
  doc.text(String(diseaseLevel), 110, 70);

  doc.text("hasDisease: ", 20, 80);
  doc.text(hasDisease ? "Yes" : "No", 110, 80);

  doc.text("Submission status: ", 20, 90);
  doc.text(StatusDefinition, 110, 90);

  doc.text("Is the submission currently active: ", 20, 100);
  doc.text(active ? "Yes" : "No", 110, 100);

  //  Start of class level probability table section
  doc.text("Class level probability", 20, 120);
  doc.setFontSize(8);
  doc.text("Class name   ", 30, 130);
  doc.text("Class level probability      ", 80, 130);
  doc.text("_______________________________________________________", 25, 135);

  doc.text("Class 01 (healthy) ", 30, 140);
  doc.text(firstClassProbability, 90, 140);

  doc.text("Class 02", 30, 150);
  doc.text(secondClassProbability, 90, 150);

  doc.text("Class 03", 30, 160);
  doc.text(thirdClassProbability, 90, 160);

  doc.text("Class 04", 30, 170);
  doc.text(fourthClassProbability, 90, 170);

  doc.text("Class 05", 30, 180);
  doc.text(fifthClassProbability, 90, 180);

  doc.text("Class 06", 30, 190);
  doc.text(sixthClassProbability, 90, 190);
  //  End of class level probability table section

  if (overlayImage) {
    doc.addPage(); // Add a new page for the model prediction overlay image

    doc.setFontSize(12);
    doc.text("Model prediction overlay", 20, 40);
    //  Placeholder for model prediction overlay image
    //   doc.text("[Model Prediction Overlay Image]", 20, 220);

    const imageSrc = `data:image/jpeg;base64,${overlayImage}`;
    doc.addImage(imageSrc, "JPEG", 20, 60, 170, 170);
  }

  doc.save("prediction-report.pdf");
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
