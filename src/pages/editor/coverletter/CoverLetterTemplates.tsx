import React from "react";

const CoverLetterTemplates: React.FC = () => {
  return (
    <div className=" px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 justify-center items-center gap-3 my-10 mt-5">
      {coverLetterTemplate.map((item) => (
        <div className="  mx-auto cursor-pointer shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <img src={item.img} alt="cover letter template" />
        </div>
      ))}
    </div>
  );
};

export default CoverLetterTemplates;

const coverLetterTemplate = [
  {
    templateId: "sydney01",
    img: "https://i.ibb.co/DDfZsj1/sydney-cover-letter-templates.jpg",
  },
  {
    templateId: "vienna01",
    img: "https://i.ibb.co/k9TKstJ/vienna-cover-letter-templates.jpg",
  },
  {
    templateId: "newyork01",
    img: "https://i.ibb.co/JCmdVrt/new-york-cover-letter-templates.jpg",
  },
  {
    templateId: "stockholm01",
    img: "https://i.ibb.co/ZYgp496/stockholm-cover-letter-templates-1.jpg",
  },

  {
    templateId: "toronto01",
    img: "https://i.ibb.co/rmkbnC4/toronto-cover-letter-templates.jpg",
  },
];
