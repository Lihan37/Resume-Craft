/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "swiper/swiper-bundle.css";
import { PiGlobeStand } from "react-icons/pi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "swiper/swiper-bundle.css";
import Card from "./Card";
import { ResumeTemplatesType } from "../../../components/resumeTemplates/template";
import { CoverLettersTemplatesType } from "../../../components/coverLetterTemplates/template";
import useDisplay from "../../../hooks/useDisplay";

interface IData {
  template: {
    templateId: string;
    img: string;
    style: any;
  };
  tags: string[];
  name: string;
}

interface IPopular {
  data: IData[];
  type: string;
}

const Popular: React.FC<IPopular> = ({ data = [], type }) => {
  const [windowWidth] = useDisplay();
  const [activeSlide, setActiveSlide] = useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end:
      windowWidth > 1025
        ? data.length > 4
          ? 4
          : data.length
        : windowWidth > 770
        ? data.length > 3
          ? 3
          : data.length
        : windowWidth > 425
        ? data.length > 2
          ? 2
          : data.length
        : 1,
  });

  const handleSlidePrev = () => {
    if (activeSlide.start === 0) {
      return;
    }
    setActiveSlide((prv) => ({
      ...prv,
      start: prv.start - 1,
      end: prv.end - 1,
    }));
  };

  const handleSlideNext = () => {
    if (data.length === activeSlide.end) {
      return;
    }
    setActiveSlide((prv) => ({
      ...prv,
      start: prv.start + 1,
      end: prv.end + 1,
    }));
  };
  return (
    data?.length > 0 && (
      <>
        <div className="flex justify-between items-center py-7 border-b-2 mb-7">
          <div className="flex gap-3 items-center">
            <PiGlobeStand className="text-4xl text-c-primary" />
            <h1 className="text-4xl font-bold text-c-dark"> Most Popular</h1>
          </div>
          <div className="flex  justify-start gap-5">
            <button
              disabled={activeSlide.start === 0}
              className={` ${
                activeSlide.start === 0
                  ? "bg-blue-300 text-gray-300"
                  : "bg-c-primary text-white"
              }    p-3 rounded-full text-2xl`}
              onClick={handleSlidePrev}>
              <IoArrowBack />
            </button>
            <button
              disabled={activeSlide.end === data.length}
              className={` ${
                activeSlide.end === data.length
                  ? "bg-blue-300 text-gray-300"
                  : "bg-c-primary text-white"
              }    p-3 rounded-full text-2xl`}
              onClick={handleSlideNext}>
              <IoArrowForward />
            </button>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.slice(activeSlide.start, activeSlide.end)?.map((item, i) => {
            return (
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
            );
          })}
        </div>
      </>
    )
  );
};

export default Popular;
