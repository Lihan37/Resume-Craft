import React from "react";
import useTitleSet from "../../../hooks/useTitleSet";
import HeaderResume from "../Shared/Header";
import Search from "../Shared/Search";
import Popular from "../Shared/Popular";
import { images } from "../../../constant";

const ResumesTemplates: React.FC = () => {
  useTitleSet("Resume Templates");

  return (
    <div className=" w-full">
      <div className=" bg-blue-50 py-20">
        <HeaderResume
          sectionHeader="Discover resumes to elevate your career with our collection"
          description=" Accompanied by detailed writing guides to help you craft a winning
              resume tailored to your industry and career level. Whether you're
              a seasoned professional seeking to advance in your career or a
              recent graduate entering the workforce, our diverse range of
              resume examples covers various job roles and industries."
          button="Create Resume"
          image={images.resumeTemplate}
        />
      </div>

      <Search />
      <Popular></Popular>
    </div>
  );
};

export default ResumesTemplates;

// https://resume.io/resume-examples
