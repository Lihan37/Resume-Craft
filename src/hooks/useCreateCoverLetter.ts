import { useAppDispatch } from "../app/store";
import { createUserHistory } from "../services/history/historyApi";
import { nanoid } from "@reduxjs/toolkit";
import { ISingleUserHistory } from "../services/history/historySlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../services/auth/authSelector";
import coverLetterStyle from "../components/coverLetterTemplates/style";
import {
  changeTemplate,
  initialState,
} from "../services/coverletterEditor/coverletterEditorSlice";

const useCreateCoverLetter = () => {
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
          type: "coverletter",
          createdAt: "",
          updatedAt: "",
        } as ISingleUserHistory)
      );
    } catch (error) {
      console.error("Error creating history:", error);
    }
  };

  const createCoverLetter = () => {
    if (!user._id) {
      navigate(`/auth/login`);
      return;
    }
    const data = {
      ...initialState.coverLetter,
      _id: templateId,
      templateId: "sydney01",
      historyId: historyId,
      style: {
        ...coverLetterStyle["sydney01"].style.require,
      },
    };
    handleCreateHistory();
    dispatch(changeTemplate(data));
    navigate(`/edit/coverletter/${data._id}`);
    return;
  };
  return [createCoverLetter];
};

export default useCreateCoverLetter;
