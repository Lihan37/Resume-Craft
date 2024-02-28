import { ISydney2 } from "./Sydney2/Sydney2";
import Sydney2PDF from "./Sydney2/Sydney2PDF";
import { IMadrid } from "./madrid/Madrid";
import MadridPDF from "./madrid/MadridPDF";
import { ISydney } from "./sydney/Sydney";
import SydneyPDF from "./sydney/SydneyPDF";
import { IVienna } from "./vienna/Vienna";
import ViennaPDF from "./vienna/ViennaPDF";
import { FC } from "react";

export type ResumePDFTemplatesType = {
  vienna01: { id: string; template: FC<IVienna> };
  sydney01: { id: string; template: FC<ISydney> };
  sydney02: { id: string; template: FC<ISydney2> };
  madrid01: { id: string; template: FC<IMadrid> };
};

const resumePDF = {
  vienna01: { id: "vienna01", template: ViennaPDF },
  sydney01: { id: "sydney01", template: SydneyPDF },
  sydney02: { id: "sydney02", template: Sydney2PDF },
  madrid01: { id: "madrid01", template: MadridPDF },
};

export default resumePDF;
