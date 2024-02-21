import { ISydney } from "./sydney/Sydney";
import SydneyPDF from "./sydney/SydneyPDF";
import { IVienna } from "./vienna/Vienna";
import ViennaPDF from "./vienna/ViennaPDF";
import { FC } from "react";

export type ResumePDFTemplatesType = {
  vienna01: { id: string; template: FC<IVienna> };
  sydney01: { id: string; template: FC<ISydney> };
};

const resumePDF = {
  vienna01: { id: "vienna01", template: ViennaPDF },
  sydney01: { id: "sydney01", template: SydneyPDF },
};

export default resumePDF;
