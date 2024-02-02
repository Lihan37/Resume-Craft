import { FaCloudDownloadAlt, FaCopy, FaEdit } from "react-icons/fa";
import Title from "../../../components/editor/Title";
import { Link } from "react-router-dom";

interface IButtonOption {
  children: React.ReactNode;
}

interface ISingleCard {
  image: string;
}

const ButtonOption: React.FC<IButtonOption> = ({ children }) => {
  return (
    <button className="flex justify-start items-center gap-2 font-semibold text-base hover:text-c-primary duration-300 transition-colors">
      {children}
    </button>
  );
};

const SingleCard: React.FC<ISingleCard> = ({ image }) => {
  return (
    <Link to="/edit/resume">
      <div className=" flex justify-start items-start gap-5">
        <div className="h-56 lg:h-72 xl:h-56 2xl:h-72 w-full  border-[1px] rounded-md overflow-hidden">
          <img className=" h-full w-full" src={image} alt="image" />
        </div>
        <div className="text-c-dark flex flex-col gap-2 justify-start items-start w-full">
          <Title maxWidth="80px" />
          <p className=" text-c-dark-light text-sm">Updated 14 January</p>
          <ButtonOption>
            <FaEdit className=" text-xl text-c-primary" /> Edit
          </ButtonOption>
          <ButtonOption>
            <FaCopy className=" text-xl text-c-primary" /> Make a copy
          </ButtonOption>
          <ButtonOption>
            <FaCloudDownloadAlt className=" text-xl text-c-primary" /> Download
            PDF
          </ButtonOption>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
