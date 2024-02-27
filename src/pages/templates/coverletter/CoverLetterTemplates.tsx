import React from "react";
import useTitleSet from "../../../hooks/useTitleSet";
import HeaderResume from "../Shared/Header";
import Search from "../Shared/Search";
import Popular from "../Shared/Popular";
import { data, images } from "../../../constant";
import Catagories from "../Shared/Catagories";
import { Container } from "../../../components/common/Container";
import coverLetterTemplate from "../../../utils/coverLetterTemplate";

const catagories = [
  {
    label: "Engineering",
    value: "engineering",
    description:
      "Our tailor-made samples and guides has all of the tools you need to easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success.",
  },
  {
    label: "Medical",
    value: "medical",
    description:
      "Our tailor-made samples and guides has all of the tools you need to easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success.",
  },
  {
    label: "Education",
    value: "education",
    description:
      "Our tailor-made samples and guides has all of the tools you need to easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success.",
  },
  {
    label: "Transportation",
    value: "transportation",
    description:
      "Our tailor-made samples and guides has all of the tools you need to easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success.",
  },
  {
    label: "Administrative",
    value: "administrative",
    description:
      "Our tailor-made samples and guides has all of the tools you need to easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success.",
  },
];

const CoverLetterTemplates: React.FC = () => {
  useTitleSet("Cover letter templates");
  const mostPopular = data.coverletter.filter((i) =>
    i.tags.includes("most-popular")
  );
  return (
    <div>
      <div className=" bg-blue-50 py-20">
        <HeaderResume
          sectionHeader="Craft impactful cover letters for success in your career exploration"
          description=" Craft impactful cover letters effortlessly with our intuitive generator tool. Tailor each letter to your industry, and level up your job application game. Whether you're a seasoned professional or a recent graduate, our collection of templates and writing guides ensures you make a lasting impression on employers."
          button="Create Cover letter"
          image={images.coverlatterTemplate}
          create="coverletter"
        />
      </div>
      <Container>
        <Search />
        <Popular resumes={mostPopular} />
        {catagories.map((item) => {
          const coverLetter = coverLetterTemplate.filter((i) =>
            i.tags.includes(item.value)
          );
          return (
            <Catagories
              type="coverletter"
              key={item.value}
              data={coverLetter}
              name={item.label}
              doc={item.description}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default CoverLetterTemplates;
