/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "../../../../components/common/Container";
import TabSection from "./TabSection";
import Button from "../../../../components/common/Button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppDispatch, RootState, useAppDispatch } from "../../../../app/store";
import { userHistory } from "../../../../services/history/historyApi";
import { useSelector } from "react-redux";
import {
  selectAllHistory,
  selectHistory,
  selectHistoryLoading,
} from "../../../../services/history/historySelector";
import UserDashboardSkeleton from "../../../../components/skeleton/UserDashboardSkeleton";
import useCreateCoverLetter from "../../../../hooks/useCreateCoverLetter";
import useCreateResume from "../../../../hooks/useCreateResume";

interface State {
  activeTab: string;
}

const UserDashboard: React.FC = () => {
  const [state, setState] = useState<State>({
    activeTab: "resume",
  });
  const { activeTab } = state;
  const appDispatch: AppDispatch = useAppDispatch();
  const allHistory = useSelector(selectAllHistory);

  const history = useSelector((state: RootState) =>
    selectHistory(state, activeTab)
  );
  const loading = useSelector(selectHistoryLoading);
  const [createCoverLetter] = useCreateCoverLetter();
  const [createResume] = useCreateResume();

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

  const createNew = (value: string) => {
    if (value === "resume") {
      createResume();
      return;
    }

    if (value === "coverletter") {
      createCoverLetter();
      return;
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
