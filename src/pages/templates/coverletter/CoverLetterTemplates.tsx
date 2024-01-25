import React from "react";
import useTitleSet from "../../../hooks/useTitleSet";
import HeaderResume from "../Shared/Header";
import Search from "../Shared/Search";

const CoverLetterTemplates: React.FC = () => {
  useTitleSet("Cover letter templates");
  return (
    <div>
      <div className=" bg-blue-50 "> 
          <HeaderResume sectionHeader="Craft impactful cover letters for success in your career exploration" description=" Craft impactful cover letters effortlessly with our intuitive generator tool. Tailor each letter to your industry, and level up your job application game. Whether you're a seasoned professional or a recent graduate, our collection of templates and writing guides ensures you make a lasting impression on employers." button="Create Cover letter" image="https://i.ibb.co/CKYSC6n/Untitled-design-7.png"/>
        </div>
        <Search/>
    </div>
  );
};

export default CoverLetterTemplates;
