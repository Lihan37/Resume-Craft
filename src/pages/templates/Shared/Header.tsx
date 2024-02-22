import Button from "../../../components/common/Button";
import { Container } from "../../../components/common/Container";
import SectionHeader from "../../../components/common/SectionHeader";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import { useNavigate } from "react-router-dom";
import { createUserHistory } from "../../../services/history/historyApi";
import { ISingleUserHistory } from "../../../services/history/historySlice";
import {
  changeTemplate,
  initialState as initialStateResume,
} from "../../../services/resumeEditor/resumeEditorSlice";
import {
  initialState as initialStateCoverLetter,
  changeTemplate as changeTemplateCoverLetter,
} from "../../../services/coverletterEditor/coverletterEditorSlice";
import resumeStyle from "../../../components/resumeTemplates/style";
import coverLetterStyle from "../../../components/coverLetterTemplates/style";
interface HeaderForCV {
  sectionHeader: string;
  button: string;
  description: string;
  image: string;
  create: string;
}

const HeaderResume: React.FC<HeaderForCV> = ({
  sectionHeader,
  description,
  button,
  image,
  create = "resume",
}) => {
  const templateId = nanoid();
  const historyId = nanoid();

  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreateHistory = async () => {
    if (create === "resume") {
      try {
        await appDispatch(
          createUserHistory({
            _id: historyId,
            user: "",
            title: "Untitled",
            templateId: templateId,
            thumbnail: {
              public_id: "",
              url: "",
            },
            type: "resume",
            createdAt: "",
            updatedAt: "",
          } as ISingleUserHistory)
        );
      } catch (error) {
        console.error("Error creating history:", error);
      }
      return;
    }
    if (create === "coverletter") {
      try {
        await appDispatch(
          createUserHistory({
            _id: historyId,
            user: "",
            title: "Untitled",
            templateId: templateId,
            thumbnail: {
              public_id: "",
              url: "",
            },
            type: "coverletter",
            createdAt: "",
            updatedAt: "",
          } as ISingleUserHistory)
        );
      } catch (error) {
        console.error("Error creating history:", error);
      }
      return;
    }
  };

  const createNew = () => {
    if (create === "resume") {
      const data = {
        ...initialStateResume.resume,
        _id: templateId,
        templateId: "vienna01",
        historyId: historyId,
        style: {
          ...resumeStyle["vienna01"].style.require,
        },
      };
      handleCreateHistory();
      dispatch(changeTemplate(data));
      navigate(`/edit/resume/${data._id}`);
      return;
    }

    if (create === "coverletter") {
      const data = {
        ...initialStateCoverLetter.coverLetter,
        _id: templateId,
        templateId: "sydney01",
        historyId: historyId,
        style: {
          ...coverLetterStyle["sydney01"].style.require,
        },
      };
      handleCreateHistory();
      dispatch(changeTemplateCoverLetter(data));
      navigate(`/edit/coverletter/${data._id}`);
      return;
    }
  };

  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="space-y-5 lg:space-y-10">
          <SectionHeader>
            <p className="font-bold md:text-left">{sectionHeader}</p>
          </SectionHeader>
          <p className="font-mono text-center md:text-left text-sm md:text-base xl:text-lg max-w-md xl:max-w-xl text-c-dark-light  ">
            {description}
          </p>
          <div className=" flex justify-center md:justify-start items-center gap-10 ">
            <Button onClick={createNew}>{button}</Button>
          </div>
        </div>
        <div className="lg:w-[1100px]">
          <img src={image} alt="image" className=" h-full w-full" />
        </div>
      </div>
    </Container>
  );
};

export default HeaderResume;
