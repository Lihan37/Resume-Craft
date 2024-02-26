import { FC } from "react";
import Sydney, { ISydney } from "./sydney/Sydney";
import London, { ILondon } from "./london/London";

export type CoverLettersTemplatesType = {
  sydney01: { id: string; template: FC<ISydney> };
  london01: { id: string; template: FC<ILondon> };
};

const coverLetters = {
  sydney01: { id: "sydney01", template: Sydney },
  london01: { id: "london01", template: London },
};

export default coverLetters;
