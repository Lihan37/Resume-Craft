import React from "react";
import useTitleSet from "../../../hooks/useTitleSet";
import HeaderResume from "../Shared/Header";
import Search from "../Shared/Search";
import Popular from "../Shared/Popular";
import { data, images } from "../../../constant";
import Catagories from "../Shared/Catagories";
import { Container } from "../../../components/common/Container";

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
        <Search />
        <Popular resumes={data.resumes} />

        {catagories.map((item, index) => {
          const resumes = data.resumes.filter((i) =>
            i.tags.includes(item.value)
          );
          return (
            <Catagories
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
