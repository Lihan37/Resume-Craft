import { useAppDispatch } from "../app/store";
import { createUserHistory } from "../services/history/historyApi";
import { nanoid } from "@reduxjs/toolkit";
import { ISingleUserHistory } from "../services/history/historySlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../services/auth/authSelector";
import resumeStyle from "../components/resumeTemplates/style";
import {
  changeTemplate,
  initialState,
} from "../services/resumeEditor/resumeEditorSlice";
import { ResumeTemplatesType } from "../components/resumeTemplates/template";

const useCreateResume = () => {
  const templateId = nanoid();
  const historyId = nanoid();
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleCreateHistory = async () => {
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
  };

  const createResume = ({
    SelectedTemplateId = "vienna01",
  }: {
    SelectedTemplateId?: keyof ResumeTemplatesType;
  }) => {
    if (!user._id) {
      navigate(`/auth/login`);
      return;
    }
    const data = {
      ...initialState.resume,
      _id: templateId,
      templateId: SelectedTemplateId,
      historyId: historyId,
      style: {
        ...resumeStyle[SelectedTemplateId].style.require,
      },
    };
    handleCreateHistory();
    dispatch(changeTemplate(data));
    navigate(`/edit/resume/${data._id}`);
    return;
  };
  return [createResume];
};

export default useCreateResume;
