import LondonPDF from "./london/LondonPDF";
import SydneyPDF from "./sydney/SydneyPDF";

const coverLetterPDF = {
  sydney01: { id: "sydney01", template: SydneyPDF },
  london01: { id: "london01", template: LondonPDF },
};

export default coverLetterPDF;
