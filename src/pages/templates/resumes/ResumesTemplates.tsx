import React from "react";
import useTitleSet from "../../../hooks/useTitleSet";
import HeaderResume from "../Shared/Header";
import Popular from "../Shared/Popular";
import { images } from "../../../constant";
import Catagories from "../Shared/Catagories";
import { Container } from "../../../components/common/Container";
import resumeTemplates from "../../../utils/resumeTemplates";

const catagories = [
  {
    label: "ATS-Friendly",
    value: "ats-friendly",
    description:
      "Our tailor-made samples and guides has all of the tools you need to easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success.",
  },
  {
    label: "Professional",
    value: "professional",
    description:
      "Our tailor-made samples and guides has all of the tools you need to easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success.",
  },
  {
    label: "Modern",
    value: "modern",
    description:
      "Our tailor-made samples and guides has all of the tools you need to easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success.",
  },
  {
    label: "Creative",
    value: "creative",
    description:
      "Our tailor-made samples and guides has all of the tools you need to easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success.",
  },
];

const ResumesTemplates: React.FC = () => {
  useTitleSet("Resume Templates");
  const mostPopular = resumeTemplates.filter((i) =>
    i.tags.includes("most-popular")
  );
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
          create="resume"
        />
      </div>

      <Container>
        <Popular data={mostPopular} type="resume" />

        {catagories.map((item, index) => {
          const resumes = resumeTemplates.filter((i) =>
            i.tags.includes(item.value)
          );
          return (
            <Catagories
              type="resume"
              key={index}
              data={resumes}
              name={item.label}
              doc={item.description}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default ResumesTemplates;

// https://resume.io/resume-examples
