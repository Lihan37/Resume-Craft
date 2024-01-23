import React, { useState } from "react";
import SectionHeader from "../../components/common/SectionHeader";
import { data } from "../../constant";
import TextGradient from "../../components/common/TextGradient";
import { FaMinus, FaPlus } from "react-icons/fa";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <SectionHeader label="faq">
        Frequently Asked <TextGradient>Questions</TextGradient> <br /> About
        Resume Builder
      </SectionHeader>
      <div className="mt-16 text-c-dark">
        {data.faqs.map((item, index) => {
          const isActive = openIndex === index;
          const lastFaqIsTrue = index + 1 === data?.faqs.length;
          const nextBorderActive = index === openIndex + 1;
          return (
            <div
              onClick={() => toggleAccordion(index)}
              key={item.id}
              className={`border-t-2 ${lastFaqIsTrue && "border-b-2"} ${
                isActive && " border-c-primary-light text-c-primary"
              } ${nextBorderActive && "border-t-c-primary-light"}`}>
              <div
                className={` ${
                  isActive && "pb-3"
                } flex py-6 cursor-pointer  items-center justify-between w-full focus:outline-none`}>
                <div className=" text-base xl:text-xl font-semibold capitalize">
                  {item.question}
                </div>
                {isActive ? (
                  <FaMinus size={20} className="text-c-primary" />
                ) : (
                  <FaPlus size={20} className="text-c-primary" />
                )}
              </div>
              {isActive && (
                <div className="pb-6 text-sm xl:text-lg text-c-dark font-mono">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
