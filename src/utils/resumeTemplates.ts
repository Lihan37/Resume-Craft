import resumeStyle from "../components/resumeTemplates/style";
import { images } from "../constant";

const resumeTemplates = [
  {
    template: {
      templateId: "vienna01",
      img: "https://i.ibb.co/nBy6gph/Screenshot-3.png",
      style: { ...resumeStyle["vienna01"].style.require },
    },
    tags: ["professional", "ats-friendly", "modern", "creative"],
  },
  {
    template: {
      templateId: "sydney01",
      img: "https://i.ibb.co/N6Y0P1q/Screenshot-2.png",
      style: { ...resumeStyle["sydney01"].style.require },
    },
    tags: ["professional", "ats-friendly", "modern", "creative"],
  },
  {
    template: {
      templateId: "madrid01",
      img: images.resume1,
      style: { ...resumeStyle["madrid01"].style.require },
    },
    tags: ["professional", "ats-friendly", "modern", "creative"],
  },
  {
    template: {
      templateId: "stockholm01",
      img: images.resume2,
      style: { ...resumeStyle["stockholm01"].style.require },
    },
    tags: ["professional", "ats-friendly", "modern", "creative"],
  },
];

export default resumeTemplates;
//  tags: ["professional", "ats-friendly", "modern", "creative"],
