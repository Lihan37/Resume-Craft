import React from "react";
import { IResumeData } from "../../services/resumeEditor/resumeEditorSlice";
import resumes, {
  ResumeTemplatesType,
} from "../../components/resumeTemplates/template";
import { Navigate } from "react-router-dom";

interface IResumeShare {
  data: IResumeData;
}
const ResumeShare: React.FC<IResumeShare> = ({ data }) => {
  const Template = resumes[data.templateId as keyof ResumeTemplatesType]
    ? resumes[data.templateId as keyof ResumeTemplatesType].template
    : null;
  return Template ? <Template resume={data} /> : <Navigate to="/notfound" />;
};

export default ResumeShare;
