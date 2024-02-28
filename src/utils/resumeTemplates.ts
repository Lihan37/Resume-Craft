import resumeStyle from "../components/resumeTemplates/style";
import { images } from "../constant";

const resumeTemplates = [
  {
    template: {
      templateId: "vienna01",
      img: "https://i.ibb.co/nBy6gph/Screenshot-3.png",
      style: { ...resumeStyle["vienna01"].style.require },
    },
    tags: [
      "professional",
      "ats-friendly",
      "modern",
      "creative",
      "most-popular",
    ],
    name: "Web Developer",
  },
  {
    template: {
      templateId: "sydney01",
      img: "https://i.ibb.co/N6Y0P1q/Screenshot-2.png",
      style: { ...resumeStyle["sydney01"].style.require },
    },
    tags: [
      "professional",
      "ats-friendly",
      "modern",
      "creative",
      "most-popular",
    ],
    name: "Technician",
  },
  {
    template: {
      templateId: "athens01",
      img: "https://i.ibb.co/g3HhkmQ/Screenshot-9.png",
      style: { ...resumeStyle["athens01"].style.require },
    },
    tags: [
      "professional",
      "ats-friendly",
      "modern",
      "creative",
      "most-popular",
    ],
    name: "Civil Engineer",
  },
  {
    template: {
      templateId: "madrid01",
      img: "https://i.ibb.co/YT2ckZX/Screenshot-8.png",
      style: { ...resumeStyle["madrid01"].style.require },
    },
    tags: [
      "professional",
      "ats-friendly",
      "modern",
      "creative",
      "most-popular",
    ],
    name: "Correctional Officer",
  },
  {
    template: {
      templateId: "sydney02",
      img: "https://i.ibb.co/j36pPQt/Screenshot-7.png",
      style: { ...resumeStyle["sydney02"].style.require },
    },
    tags: [
      "professional",
      "ats-friendly",
      "modern",
      "creative",
      "most-popular",
    ],
    name: "Engineer",
  },

  {
    template: {
      templateId: "stockholm01",
      img: images.resume2,
      style: { ...resumeStyle["stockholm01"].style.require },
    },
    tags: [
      "professional",
      "ats-friendly",
      "modern",
      "creative",
      "most-popular",
    ],
    name: "Civil Engineer",
  },
];

export default resumeTemplates;
//  tags: ["professional", "ats-friendly", "modern", "creative"],
