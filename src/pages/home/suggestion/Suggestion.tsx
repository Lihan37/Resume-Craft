import React, { useState } from "react";
import { FaChessQueen, FaAward, FaDeviantart, FaReceipt } from "react-icons/fa";
import { images } from "../../../constant";
import { AnimatePresence, motion } from "framer-motion";
import Tab from "../../../components/common/Tab";
import Slider from "./Slider";

const tabs = [
  {
    value: "ats-friendly",
    label: "ATS-Friendly",
    icon: <FaReceipt />,
  },
  {
    value: "professional",
    label: "Professional",
    icon: <FaAward />,
  },
  {
    value: "modern",
    label: "Modern",
    icon: <FaDeviantart />,
  },
  {
    value: "creative",
    label: "Creative",
    icon: <FaChessQueen />,
  },
];

const resumes = [
  {
    tags: ["professional", "ats-friendly", "modern", "creative"],
    url: images.resume2,
  },
  {
    tags: ["professional", "creative", "modern", "ats-friendly"],
    url: images.resume3,
  },
  { tags: ["ats-friendly", "modern", "creative"], url: images.resume4 },
  { tags: ["creative", "professional", "ats-friendly"], url: images.resume5 },
  {
    tags: ["ats-friendly", "modern", "professional", "creative"],
    url: images.resume6,
  },
];

const Suggestion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[1].value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const filterResumes = resumes.filter((resume) => {
    if (resume.tags.includes(activeTab)) {
      return { url: resume.url };
    }
  });

  return (
    <div className=" py-8 md:py-16">
      <div className=" text-center w-full">
        <h1 className="uppercase text-xl font-mono text-c-primary font-bold">
          optimized designs
        </h1>
        <h1 className="mt-5 md:mt-8 lg:mt-10  font-semibold text-xl md:text-5xl lg:text-6xl xl:text-7xl">
          Make Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aed5d0] to-[#dccc9b]">
            Resume/CV
          </span>{" "}
          With <br className=" hidden md:block" /> Proven Professional Templates
        </h1>
        <h3 className=" mt-5 text-sm md:text-xl text-c-dark-light">
          Use one of our field-tested resume templates, designed by <br /> a
          team of HR experts and typographers
        </h3>
      </div>

      {/* // Tag section  */}
      <div className=" flex justify-center items-center my-5 lg:my-10">
        <div className=" flex justify-start items-center tracking-widest text-xs md:text-base lg:text-xl gap-2 md:gap-5 lg:gap-6 xl:gap-10 text-c-dark font-semibold ">
          {tabs.map((item) => {
            const isActive = item.value === activeTab;
            return (
              <Tab
                key={item.value}
                isActive={isActive}
                setActive={() => handleTabChange(item.value)}
                icon={item.icon}
                label={item.label}
              />
            );
          })}
        </div>
      </div>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <Slider resumes={filterResumes} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Suggestion;
