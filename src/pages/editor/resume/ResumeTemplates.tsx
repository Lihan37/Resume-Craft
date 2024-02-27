import React from "react";
import { useDispatch } from "react-redux";
import { changeTemplate } from "../../../services/resumeEditor/resumeEditorSlice";
import resumeTemplates from "../../../utils/resumeTemplates";

const ResumeTemplates: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className=" px-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-1 justify-center items-center gap-3 my-10 mt-5">
      {resumeTemplates.map((item, i) => (
        <div
          key={i}
          onClick={() => {
            dispatch(
              changeTemplate({
                templateId: item.template.templateId,
                style: item.template.style,
              })
            );
          }}
          className=" cursor-pointer shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <img src={item.template.img} alt={item.template.templateId} />
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplates;
