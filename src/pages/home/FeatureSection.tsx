import SectionHeader from "../../components/common/SectionHeader";
import TextGradient from "../../components/common/TextGradient";
import { SiReadthedocs } from "react-icons/si";
import { MdAutoAwesome } from "react-icons/md";
import { MdAutoStories } from "react-icons/md";

const data = [
  {
    id: 1,
    title: "Easy And Fast Online Resume Builder",
    doc: "Create an amazing resume in minutes with the easiest features and without leaving your web browser",
    icon: <SiReadthedocs />,
  },
  {
    id: 2,
    title: "Multi-Format Resume Options",
    doc: "Save Your Perfect Resume in Any Common Format You Know, Including ,Microsoft Word And PDF in One Click",
    icon: <MdAutoStories />,
  },
  {
    id: 3,
    title: "Automatic General Summary Generator",
    doc: "Create A Powerful Resume Profile Or Cover Letter in One Click. Writer's Block is No Longer An Obstacle ",
    icon: <MdAutoAwesome />,
  },
];

const FeatureSection = () => {
  return (
    <div>
      <SectionHeader label="Features">
        Features <TextGradient>Designed</TextGradient> To Help You Win{" "}
        <br className="hidden md:block" />
        Your Dream Job
      </SectionHeader>
      <div className=" grid grid-cols-1 md:grid-cols-3 w-full gap-10 my-16">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-slate-50 flex flex-col justify-start items-center gap-5 py-10 rounded-lg">
            <div className="p-3 bg-c-primary text-white text-2xl lg:text-3xl rounded-xl">
              {item.icon}
            </div>
            <h1 className="max-w-xs capitalize lg:px-10 text-xl font-semibold text-center">
              {item.title}
            </h1>
            <h2 className="max-w-xs text-center text-base md:text-sm lg:text-base">
              {item.doc}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
