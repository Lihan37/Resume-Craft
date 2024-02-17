import { FC } from "react";
import Stockholm, { IStockholm } from "./stockholm/Stockholm";
import Toronto, { IToronto } from "./toronto/Toronto";
// import Vienna, { IVienna } from "./vienna/Vienna";
import Sydney, { ISydney } from "./sydney/Sydney";
import Vienna, { IVienna } from "./vienna/Vienna";

export type ResumeTemplatesType = {
  toronto01: { id: string; template: FC<IToronto> };
  stockholm01: { id: string; template: FC<IStockholm> };
  // vienna01: { id: string; template: FC<IVienna> };
  sydney01: { id: string; template: FC<ISydney> };
  vienna01: { id: string; template: FC<IVienna> };
};

const resumes = {
  toronto01: { id: "toronto01", template: Toronto },
  stockholm01: { id: "stockholm01", template: Stockholm },
  // vienna01: { id: "vienna01", template: Vienna },
  sydney01: { id: "sydney01", template: Sydney },
  vienna01: { id: "vienna01", template: Vienna },
};

export default resumes;
