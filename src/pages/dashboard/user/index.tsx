import { Container } from "../../../components/common/Container";
import TabSection from "./TabSection";
import Button from "../../../components/common/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { changeTemplate } from "../../../services/resumeEditor/resumeEditorSlice";
import resumeStyle from "../../../components/resumeTemplates/style";
import { useNavigate } from "react-router-dom";
import { ISingleUserHistory } from "../../../services/history/historySlice";
import { createUserHistory } from "../../../services/history/historyApi";
import { initialState } from "../../../services/resumeEditor/resumeEditorSlice";
import { AnimatePresence, motion } from "framer-motion";
import { RootState, useAppDispatch } from "../../../app/store";
import { userHistory } from "../../../services/history/historyApi";
import { useSelector } from "react-redux";
import {
  selectAllHistory,
  selectHistory,
  selectHistoryLoading,
} from "../../../services/history/historySelector";

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("resume");
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const allHistory = useSelector(selectAllHistory);
  const navigate = useNavigate();
  const resumeId = nanoid();
  const historyId = nanoid();

  useEffect(() => {
    if (!(allHistory.length > 0)) {
      appDispatch(userHistory());
    }
  }, []);

  const history = useSelector((state: RootState) =>
    selectHistory(state, activeTab)
  );
  const loading = useSelector(selectHistoryLoading);

  let buttonLabel = { value: "resume", label: "Add Resume" };
  if (activeTab === "resume") {
    buttonLabel = { value: "resume", label: "Add Resume" };
  } else if (activeTab === "coverletter") {
    buttonLabel = { value: "coverletter", label: "Add Cover Letter" };
  } else if (activeTab === "portfolio") {
    buttonLabel = { value: "portfolio", label: "Add Portfolio" };
  }

  const handleCreateHistory = async () => {
    const data: ISingleUserHistory = {
      _id: historyId,
      user: "65bfd0f85443cc82b0f3f504",
      resumeId: resumeId,
      thumbnail: {
        public_id: "",
        url: "",
      },
      type: "resume",
      createdAt: "",
      updatedAt: "",
    };

    try {
      await appDispatch(createUserHistory(data));
    } catch (error) {
      console.error("Error creating history:", error);
    }
  };
  const createNewResume = (value: string) => {
    if (value === "resume") {
      const data = {
        ...initialState.resume,
        _id: resumeId,
        templateId: "stockholm01",
        historyId: historyId,
        style: {
          ...resumeStyle["stockholm01"].style.require,
        },
      };
      handleCreateHistory();
      dispatch(changeTemplate(data));
      navigate(`/edit/resume/${data._id}`);
    }
  };

  return (
    <Container>
      <div className=" my-20 mb-32">
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center text-c-dark">
          <h1 className=" text-2xl text-center md:text-start  md:text-3xl lg:text-4xl  font-bold text-gray-700">
            Resumes & Cover Letters & Portfolio
          </h1>
          <Button
            onClick={() => createNewResume(buttonLabel.value)}
            icon={false}>
            {buttonLabel.label}
          </Button>
        </div>
        <div className=" py-5 mt-10 md:mt-0  mb-10 border-b-2 flex justify-center md:justify-start items-center gap-5 md:gap-10 text-base md:text-lg font-semibold text-gray-500">
          <span
            onClick={() => setActiveTab("resume")}
            className={`cursor-pointer ${
              activeTab === "resume" && " text-c-primary"
            }`}>
            Resumes
          </span>
          <span
            onClick={() => setActiveTab("coverletter")}
            className={`cursor-pointer ${
              activeTab === "cover-letter" && " text-c-primary"
            }`}>
            Cover Letters
          </span>
          <span
            onClick={() => setActiveTab("portfolio")}
            className={`cursor-pointer ${
              activeTab === "portfolio" && " text-c-primary"
            }`}>
            Portfolio
          </span>
        </div>

        {!loading && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <TabSection
                createNewResume={createNewResume}
                buttonLabel={buttonLabel}
                data={history}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </Container>
  );
};

export default UserDashboard;
