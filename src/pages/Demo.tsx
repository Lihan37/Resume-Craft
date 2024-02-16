import React from "react";
import AddEmploymentHistory from "./editor/resume/AddEmploymentHistory";

const Demo: React.FC = () => {
  return (
    <div>
      Demo
      <AddEmploymentHistory
        getValue={(data) => {
          console.log("DemoPage", data);
        }}
      />
    </div>
  );
};

export default Demo;
