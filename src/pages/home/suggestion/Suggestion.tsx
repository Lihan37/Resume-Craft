import React, { useState } from "react";
import { FaChessQueen, FaAward, FaDeviantart, FaReceipt } from "react-icons/fa";
import { images } from "../../../constant";
import { AnimatePresence, motion } from "framer-motion";
import Tab from "../../../components/common/Tab";
import Slider from "./Slider";
import SectionHeader from "../../../components/common/SectionHeader";
import TextGradient from "../../../components/common/TextGradient";
import { Container } from "../../../components/common/Container";
import Button from "../../../components/common/Button";
import { Link } from "react-router-dom";

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
    <Container>
      <div className=" py-8 md:py-16 ">
        <div className=" text-center w-full">
          <SectionHeader label="optimized designs">
            Make Your <TextGradient>Resume/CV</TextGradient> With Proven{" "}
            <br className=" hidden lg:block" /> Professional Templates
          </SectionHeader>
          <h3 className=" mt-5 text-sm md:text-lg text-c-dark-light">
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
        <Link
          to="/resumes-template"
          className="flex justify-center items-center w-full">
          <Button>See More Templates</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Suggestion;
