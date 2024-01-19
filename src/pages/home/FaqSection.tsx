import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SectionHeader from "../../components/common/SectionHeader";
import { data } from "../../constant";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <SectionHeader> Frequently Asked Questions</SectionHeader>
      <div className="space-y-4 mt-8">
        {data.faqs.map((item, index) => (
          <div
            key={item.id}
            className={`border p-6 rounded shadow-md shadow-c-primary-light transition-transform transform hover:scale-101`}>
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full focus:outline-none">
              <div className="text-lg font-semibold">{item.question}</div>
              {openIndex === index ? (
                <FaChevronUp size={20} className="text-c-primary" />
              ) : (
                <FaChevronDown size={20} className="text-c-primary" />
              )}
            </button>
            {openIndex === index && (
              <div className="mt-4 text-c-dark-light">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
