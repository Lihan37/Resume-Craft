import { FC } from "react";
import Stockholm, { IStockholm } from "./stockholm/Stockholm";
import Toronto, { IToronto } from "./toronto/Toronto";
// import Vienna, { IVienna } from "./vienna/Vienna";
import Sydney, { ISydney } from "./sydney/Sydney";
import Vienna, { IVienna } from "./vienna/Vienna";
import Madrid, { IMadrid } from "./madrid/Madrid";
import Sydney2, { ISydney2 } from "./Sydney2/Sydney2";

export type ResumeTemplatesType = {
  toronto01: { id: string; template: FC<IToronto> };
  stockholm01: { id: string; template: FC<IStockholm> };
  sydney01: { id: string; template: FC<ISydney> };
  vienna01: { id: string; template: FC<IVienna> };
  madrid01: { id: string; template: FC<IMadrid> };
  sydney02: { id: string; template: FC<ISydney2> };
};

const resumes = {
  toronto01: { id: "toronto01", template: Toronto },
  stockholm01: { id: "stockholm01", template: Stockholm },
  sydney01: { id: "sydney01", template: Sydney },
  vienna01: { id: "vienna01", template: Vienna },
  madrid01: { id: "madrid01", template: Madrid },
  sydney02: { id: "sydney02", template: Sydney2 },
};

export default resumes;
