import coverLetterStyle from "../components/coverLetterTemplates/style";

const coverLetterTemplate = [
  {
    template: {
      templateId: "sydney01",
      img: "https://i.ibb.co/BLXdJgY/Screenshot-3.png",
      style: { ...coverLetterStyle["sydney01"].style.require },
    },
    tags: [
      "engineering",
      "education",
      "transportation",
      "administrative",
      "most-popular",
    ],
    name: "Government",
  },
  {
    template: {
      templateId: "london01",
      img: "https://i.ibb.co/4TctCLm/Screenshot-2.png",
      style: { ...coverLetterStyle["london01"].style.require },
    },
    tags: [
      "engineering",
      "education",
      "transportation",
      "administrative",
      "most-popular",
    ],
    name: "Engineering",
  },
];
export default coverLetterTemplate;
// {
//   templateId: "vienna01",
//   img: "https://i.ibb.co/k9TKstJ/vienna-cover-letter-templates.jpg",
// },
// {
//   templateId: "newyork01",
//   img: "https://i.ibb.co/JCmdVrt/new-york-cover-letter-templates.jpg",
// },
// {
//   templateId: "stockholm01",
//   img: "https://i.ibb.co/ZYgp496/stockholm-cover-letter-templates-1.jpg",
// },

// {
//   templateId: "toronto01",
//   img: "https://i.ibb.co/rmkbnC4/toronto-cover-letter-templates.jpg",
// },
