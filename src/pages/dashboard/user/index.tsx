/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "../../../components/common/Container";
import TabSection from "./TabSection";
import Button from "../../../components/common/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { changeTemplate } from "../../../services/resumeEditor/resumeEditorSlice";
// import { changeTemplate as changeTemplateCoverLetter } from "../../../services/coverletterEditor/coverletterEditorSlice";
import resumeStyle from "../../../components/resumeTemplates/style";
// import coverLetterStyle from "../../../components/coverLetterTemplates/style";
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
import UserDashboardSkeleton from "../../../components/skeleton/UserDashboardSkeleton";

interface State {
  activeTab: string;
  resumeId?: string;
  historyId?: string;
  coverLetterId?: string;
  coverLetterHistoryId?: string;
}

const UserDashboard: React.FC = () => {
  const [state, setState] = useState<State>({
    activeTab: "resume",
    resumeId: nanoid(),
    historyId: nanoid(),
    coverLetterId: nanoid(),
    coverLetterHistoryId: nanoid(),
  });
  const { activeTab, resumeId, historyId } = state;
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const allHistory = useSelector(selectAllHistory);

  const history = useSelector((state: RootState) =>
    selectHistory(state, activeTab)
  );
  const loading = useSelector(selectHistoryLoading);

  useEffect(() => {
    if (!(allHistory.length > 0)) {
      appDispatch(userHistory());
    }
  }, []);

  const buttonLabels: Record<string, string> = {
    resume: "Add Resume",
    coverletter: "Add Cover Letter",
    portfolio: "Add Portfolio",
  };

  const handleCreateHistory = async () => {
    let data = {};
    if (activeTab === "resume") {
      data = {
        _id: historyId,
        user: "65bfd0f85443cc82b0f3f504",
        title: "Untitled",
        resumeId: resumeId,
        thumbnail: {
          public_id: "",
          url: "",
        },
        type: "resume",
        createdAt: "",
        updatedAt: "",
      };
    } else if (activeTab === "coverLetter") {
      data = {
        _id: historyId,
        user: "65bfd0f85443cc82b0f3f504",
        title: "Untitled",
        resumeId: resumeId,
        thumbnail: {
          public_id: "",
          url: "",
        },
        type: "coverLetter",
        createdAt: "",
        updatedAt: "",
      };
    }

    try {
      await appDispatch(createUserHistory(data as ISingleUserHistory));
    } catch (error) {
      console.error("Error creating history:", error);
    }
  };

  const createNew = (value: string) => {
    if (value === "resume") {
      const data = {
        ...initialState.resume,
        _id: resumeId,
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

    if (value === "coverletter") {
      // const data = {
      //   ...initialState.resume,
      //   _id: resumeId,
      //   templateId: "sydney01",
      //   historyId: historyId,
      //   style: {
      //     ...coverLetterStyle["sydney01"].style.require,
      //   },
      // };
      // handleCreateHistory();
      // dispatch(changeTemplateCoverLetter(data));
      navigate(`/edit/coverletter/${state.coverLetterId}}`);
    }
  };

  return (
    <Container>
      <div className=" my-20 mb-32">
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center text-c-dark">
          <h1 className=" text-2xl text-center md:text-start  md:text-3xl lg:text-4xl  font-bold text-gray-700">
            Resumes & Cover Letters & Portfolio
          </h1>
          <Button onClick={() => createNew(activeTab)} icon={false}>
            {buttonLabels[activeTab]}
          </Button>
        </div>

        <div className=" py-5 mt-10 md:mt-0  mb-10 border-b-2 flex justify-center md:justify-start items-center gap-5 md:gap-10 text-base md:text-lg font-semibold text-gray-500">
          {Object.keys(buttonLabels).map((tab) => (
            <span
              key={tab}
              onClick={() => setState({ ...state, activeTab: tab })}
              className={`cursor-pointer ${
                activeTab === tab && " text-c-primary"
              }`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          ))}
        </div>

        {loading ? (
          <UserDashboardSkeleton />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <TabSection
                createNew={createNew}
                buttonLabel={{
                  value: activeTab,
                  label: buttonLabels[activeTab],
                }}
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
