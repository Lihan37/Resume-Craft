import { IVienna } from "./vienna/Vienna";
import ViennaPDF from "./vienna/ViennaPDF";
import { FC } from "react";

export type ResumePDFTemplatesType = {
  vienna01: { id: string; template: FC<IVienna> };
};

const resumePDF = {
  vienna01: { id: "vienna01", template: ViennaPDF },
};

export default resumePDF;
