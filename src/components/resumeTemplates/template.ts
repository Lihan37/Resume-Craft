import { FC } from "react";
import Stockholm, { IStockholm } from "./stockholm/Stockholm";
import Toronto, { IToronto } from "./toronto/Toronto";

export type ResumeTemplatesType = {
  toronto01: { id: string; template: FC<IToronto> };
  stockholm01: { id: string; template: FC<IStockholm> };
};

const resumes = {
  toronto01: { id: "toronto01", template: Toronto },
  stockholm01: { id: "stockholm01", template: Stockholm },
};

export default resumes;
