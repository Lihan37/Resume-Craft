import React from "react";
import { images } from "../../../constant";
import { useDispatch } from "react-redux";
import { changeTemplate } from "../../../services/resumeEditor/resumeEditorSlice";
import resumeStyle from "../../../components/resumeTemplates/style";

const ResumeTemplates: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className=" px-5 flex justify-center items-center flex-col gap-3 my-10 mt-5">
      {resumeTemplate.map((item, i) => (
        <div
          key={i}
          onClick={() => {
            dispatch(
              changeTemplate({
                templateId: item.templateId,
                style: item.style,
              })
            );
          }}
          className=" cursor-pointer shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <img src={item.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplates;

const resumeTemplate = [
  {
    templateId: "toronto01",
    img: images.resume1,
    style: { ...resumeStyle["toronto01"].style.require },
  },
  {
    templateId: "stockholm01",
    img: images.resume2,
    style: { ...resumeStyle["stockholm01"].style.require },
  },
];
