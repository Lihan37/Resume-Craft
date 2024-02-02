import { IoMdAdd } from "react-icons/io";
import SingleCard from "./SingleCard";

interface IData {
  _id: string | number;
  name: string;
  image: string;
  tags: string[];
}

interface ITabSection {
  data: IData[];
  buttonLabel?: string;
}

const TabSection: React.FC<ITabSection> = ({ data, buttonLabel = "Add" }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {data?.length > 0 &&
        data.map((item) => <SingleCard key={item._id} image={item.image} />)}

      <div className="flex justify-start items-start gap-5 ">
        <div className="min-h-56 lg:min-h-72 xl:min-h-56 2xl:min-h-72  group cursor-pointer w-full rounded-lg border-gray-300 h-full border-2 border-dashed flex flex-col justify-center items-center gap-4">
          <div className="p-2 group-hover:text-c-primary group-hover:bg-blue-50 group-hover:border-c-primary duration-300 transition-colors text-5xl border-gray-300 text-gray-300 border-2 border-dashed rounded-lg">
            <IoMdAdd />
          </div>
          <h1 className=" font-semibold text-lg text-gray-400 ">
            {buttonLabel}
          </h1>
        </div>
        <div className=" w-full"></div>
      </div>
    </div>
  );
};

export default TabSection;