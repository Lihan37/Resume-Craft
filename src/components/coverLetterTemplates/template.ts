import { FC } from "react";
import Sydney, { ISydney } from "./sydney/Sydney";

export type CoverLettersTemplatesType = {
  sydney01: { id: string; template: FC<ISydney> };
};

const coverLetters = {
  sydney01: { id: "sydney01", template: Sydney },
};

export default coverLetters;
