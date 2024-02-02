import { Link } from "react-router-dom";
import { Container } from "../../../components/common/Container";
import TabSection from "./TabSection";
import Button from "../../../components/common/Button";
import { data } from "../../../constant";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import demo from "../../../assets/resumes/demo.png";
interface IData {
  _id: string | number;
  name: string;
  image: string;
  tags: string[];
}
const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("resume");

  let tabData: IData[] = [];
  let buttonLabel: string = "";
  if (activeTab === "resume") {
    tabData = [{ _id: 1, name: "", tags: ["new"], image: demo }];
    buttonLabel = "Add Resume";
  } else if (activeTab === "cover-letter") {
    tabData = [...data.coverletter.slice(2, 4)];
    buttonLabel = "Add Cover Letter";
  } else if (activeTab === "portfolio") {
    buttonLabel = "Add Portfolio";
  }

  return (
    <Container>
      <div className=" my-20 mb-32">
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center text-c-dark">
          <h1 className=" text-2xl text-center md:text-start  md:text-3xl lg:text-4xl  font-bold text-gray-700">
            Resumes & Cover Letters & Portfolio
          </h1>
          <Link to="/edit/resume">
            <Button icon={false}>{buttonLabel}</Button>
          </Link>
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
            onClick={() => setActiveTab("cover-letter")}
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <TabSection buttonLabel={buttonLabel} data={tabData} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default UserDashboard;
