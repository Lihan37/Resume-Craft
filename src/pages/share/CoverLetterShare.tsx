import { Navigate } from "react-router-dom";
import { ICoverLetter } from "../../services/coverletterEditor/coverletterEditorSlice";
import coverLetters, {
  CoverLettersTemplatesType,
} from "../../components/coverLetterTemplates/template";

interface ICoverLetterShare {
  data: ICoverLetter;
}
const CoverLetterShare: React.FC<ICoverLetterShare> = ({ data }) => {
  const Template = coverLetters[
    data.templateId as keyof CoverLettersTemplatesType
  ]
    ? coverLetters[data.templateId as keyof CoverLettersTemplatesType].template
    : null;
  return Template ? (
    <Template coverLetter={data} />
  ) : (
    <Navigate to="/notfound" />
  );
};

export default CoverLetterShare;
