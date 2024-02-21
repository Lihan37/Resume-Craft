import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import ViennaPDF from "../components/resumeTemplates/vienna/ViennaPDF";

const Demo: React.FC = () => {
  return (
    <div className="">
      <PDFViewer width={1000} height={1300}>
        <ViennaPDF />
      </PDFViewer>
    </div>
  );
};

export default Demo;
