import React from "react";
import { useDispatch } from "react-redux";
import { changeTemplate } from "../../../services/coverletterEditor/coverletterEditorSlice";
import coverLetterTemplate from "../../../utils/coverLetterTemplate";
const CoverLetterTemplates: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className=" px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-center items-center gap-3 my-10 mt-5">
      {coverLetterTemplate.map((item) => (
        <div
          key={item.template.templateId}
          onClick={() => {
            dispatch(
              changeTemplate({
                templateId: item.template.templateId,
                style: item.template.style,
              })
            );
          }}
          className="  mx-auto cursor-pointer shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <img src={item.template.img} alt="cover letter template" />
        </div>
      ))}
    </div>
  );
};

export default CoverLetterTemplates;
