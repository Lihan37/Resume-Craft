import React, { useState, useEffect } from "react";
import useTitleSet from "../../hooks/useTitleSet";

const Faq: React.FC = () => {
  useTitleSet("Faq");

  const [faqs, setFaqs] = useState([]);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/data/faq.json"); // Replace with the actual path
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchData();
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedIds((prevExpandedIds) =>
      prevExpandedIds.includes(id)
        ? prevExpandedIds.filter((prevId) => prevId !== id)
        : [...prevExpandedIds, id]
    );
  };

  return (
    <div className="faq-container p-4">
      <h1 className="text-4xl text-center font-bold mb-8">Frequently Asked Questions</h1>
      <div>
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4">
            <div
              className="cursor-pointer flex justify-between items-center p-4 bg-gray-100 rounded-md"
              onClick={() => toggleExpand(faq.id)}
            >
              <p className="text-xl font-semibold">{faq.question}</p>
              <span>{expandedIds.includes(faq.id) ? "▲" : "▼"}</span>
            </div>
            {expandedIds.includes(faq.id) && (
              <div className="p-4 bg-white rounded-md mt-2 border border-gray-300">
                <p className="text-gray-800">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
