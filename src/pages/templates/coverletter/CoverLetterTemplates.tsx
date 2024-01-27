import React from "react";
import useTitleSet from "../../../hooks/useTitleSet";
import HeaderResume from "../Shared/Header";
import Search from "../Shared/Search";
import Popular from "../Shared/Popular";
import { images } from "../../../constant";

const CoverLetterTemplates: React.FC = () => {
  useTitleSet("Cover letter templates");
  return (
    <div>
      <div className=" bg-blue-50 py-20">
        <HeaderResume
          sectionHeader="Craft impactful cover letters for success in your career exploration"
          description=" Craft impactful cover letters effortlessly with our intuitive generator tool. Tailor each letter to your industry, and level up your job application game. Whether you're a seasoned professional or a recent graduate, our collection of templates and writing guides ensures you make a lasting impression on employers."
          button="Create Cover letter"
          image={images.coverlatterTemplate}
        />
      </div>
      <Search />
      <Popular></Popular>
    </div>
  );
};

export default CoverLetterTemplates;
