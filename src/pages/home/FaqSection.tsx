import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/src/data/faq.json")
      .then((response) => response.json())
      .then((data: FaqItem[]) => setFaqData(data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h2 className="text-4xl my-5 text-center font-bold">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
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
