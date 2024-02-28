/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { PiGlobeStand } from "react-icons/pi";
import Card from "./Card";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useDisplay from "../../../hooks/useDisplay";
import { ResumeTemplatesType } from "../../../components/resumeTemplates/template";
import { CoverLettersTemplatesType } from "../../../components/coverLetterTemplates/template";

interface IData {
  template: {
    templateId: string;
    img: string;
    style: any;
  };
  tags: string[];
  name: string;
}
interface ICatagories {
  data: IData[];
  name: string;
  doc: string;
  type: string;
}

const Catagories: React.FC<ICatagories> = ({ data, name, doc, type }) => {
  const [windowWidth] = useDisplay();
  const [more, setMore] = useState<number>(4);

  let show = 4;
  useEffect(() => {
    show = windowWidth > 1025 ? 4 : windowWidth > 768 ? 3 : 4;
    setMore(show);
  }, [windowWidth]);

  return (
    data?.length > 0 && (
      <div className="py-10">
        <div className=" text-center md:text-start flex flex-col md:flex-row justify-between items-start my-10 gap-5 md:gap-0">
          <div className="w-full md:w-5/12 flex justify-center md:justify-start gap-3 text-4xl text-c-dark font-bold ">
            <PiGlobeStand className=" text-c-primary" />
            <span className=" relative">
              {name}
              <span className=" absolute -top-2 font-semibold -right-10 p-2 rounded-full bg-blue-50 text-c-primary-light text-sm ">
                {data?.length}
              </span>
            </span>
          </div>
          <p className=" w-full md:w-7/12 text-lg text-c-dark-light">{doc}</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.slice(0, more).map((item, i) => (
            <Card
              type={type}
              templateId={
                type === "resume"
                  ? (item.template.templateId as keyof ResumeTemplatesType)
                  : null
              }
              coverLetterTemplateId={
                type === "coverletter"
                  ? (item.template
                      .templateId as keyof CoverLettersTemplatesType)
                  : null
              }
              name={item.name}
              imgUrl={item.template.img}
              key={i}
            />
          ))}
        </div>
        {data?.length > 4 && data?.length !== more && (
          <button
            onClick={() => setMore(data?.length)}
            className="flex justify-start items-center gap-3 my-5 text-lg font-semibold text-c-primary">
            <span>Show more</span>
            <IoIosArrowDown className=" text-2xl" />
          </button>
        )}
        {data?.length === more && data?.length > 4 && (
          <button
            onClick={() => setMore(show)}
            className="flex justify-start items-center gap-3 my-5 text-lg font-semibold text-c-primary">
            <span>Show Less</span>
            <IoIosArrowUp className=" text-2xl" />
          </button>
        )}
      </div>
    )
  );
};

export default Catagories;
