import React from "react";
import useTitleSet from "../../hooks/useTitleSet";
import FaqSection from "../home/FaqSection"; 

const Faq: React.FC = () => {
  useTitleSet("Faq");
  return (
    <div>
      <FaqSection />
    </div>
  );
};

export default Faq;
