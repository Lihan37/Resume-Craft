import { FC } from "react";
import Stockholm, { IStockholm } from "./stockholm/Stockholm";
import Toronto, { IToronto } from "./toronto/Toronto";
// import Vienna, { IVienna } from "./vienna/Vienna";
import Sydney, { ISydney } from "./sydney/Sydney";
import Vienna, { IVienna } from "./vienna/Vienna";
import Madrid, { IMadrid } from "./madrid/Madrid";

export type ResumeTemplatesType = {
  toronto01: { id: string; template: FC<IToronto> };
  stockholm01: { id: string; template: FC<IStockholm> };
  sydney01: { id: string; template: FC<ISydney> };
  vienna01: { id: string; template: FC<IVienna> };
  madrid01: { id: string; template: FC<IMadrid> };
};

const resumes = {
  toronto01: { id: "toronto01", template: Toronto },
  stockholm01: { id: "stockholm01", template: Stockholm },
  sydney01: { id: "sydney01", template: Sydney },
  vienna01: { id: "vienna01", template: Vienna },
  madrid01: { id: "madrid01", template: Madrid },
};

export default resumes;
