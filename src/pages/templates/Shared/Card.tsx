import React from "react";
import Button from "../../../components/common/Button";
import useCreateResume from "../../../hooks/useCreateResume";
import { ResumeTemplatesType } from "../../../components/resumeTemplates/template";
import useCreateCoverLetter from "../../../hooks/useCreateCoverLetter";
import { CoverLettersTemplatesType } from "../../../components/coverLetterTemplates/template";

interface ICard {
  imgUrl: string;
  name?: string;
  type: string;
  templateId: keyof ResumeTemplatesType | null;
  coverLetterTemplateId: keyof CoverLettersTemplatesType | null;
}

const Card: React.FC<ICard> = ({
  imgUrl,
  name,
  templateId,
  type,
  coverLetterTemplateId,
}) => {
  const [createResume] = useCreateResume();
  const [createCoverLetter] = useCreateCoverLetter();

  return (
    <div className=" bg-blue-50 rounded-sm p-5 cursor-pointer relative overflow-hidden group">
      <h1 className="  font-normal font-mono text-base xl:text-xl text-c-dark capitalize pb-5">
        {name}
      </h1>
      <img src={imgUrl} alt={name} className="h-96 w-full" />
      <div className=" absolute w-full left-0 flex justify-center items-center -bottom-80 group-hover:bottom-20 duration-300 ">
        <Button
          onClick={() => {
            if (type === "resume" && templateId) {
              createResume({ SelectedTemplateId: templateId });
              return;
            }
            if (type === "coverletter" && coverLetterTemplateId) {
              createCoverLetter({ SelectedTemplateId: coverLetterTemplateId });
              return;
            }
          }}
          icon={true}>
          Use This
        </Button>
      </div>
    </div>
  );
};

export default Card;
