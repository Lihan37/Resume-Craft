import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfSingleSocialWebSite } from "../../../types/resumeEditor";
import AddSingeSocialWebSite from "./AddSingeSocialWebSite";

interface IAddSocialWebSite {
  getValue?: (data: TypeOfSingleSocialWebSite[]) => void;
  initialValue?: TypeOfSingleSocialWebSite[];
}

const AddSocialWebSite: React.FC<IAddSocialWebSite> = ({
  getValue = () => {},
  initialValue,
}) => {
  const [addMore, setAddMore] = useState<number>(
    initialValue && initialValue?.length > 0 ? initialValue?.length : 1
  );
  const [socialWebSite, setSocialWebSite] = useState<
    TypeOfSingleSocialWebSite[]
  >(initialValue || []);

  const handleSingleHistory = (data: TypeOfSingleSocialWebSite) => {
    // add new history
    const isAlreadyExist = socialWebSite?.find((item) => item._id === data._id);

    if (!isAlreadyExist) {
      const filterData = socialWebSite.filter((item) => item._id !== data._id);
      return setSocialWebSite([...filterData, data]);
    }

    // edit old history
    const updateHistory = socialWebSite?.map((item) => {
      if (item._id === data._id) {
        return {
          ...item,
          label: data.label,
          link: data.link,
        };
      }
      return item;
    });
    setSocialWebSite(updateHistory);
  };

  useEffect(() => {
    if (typeof getValue === "function" && socialWebSite.length > 0) {
      getValue(socialWebSite);
    }
  }, [socialWebSite]);

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item) => {
        const initialSingleData = socialWebSite?.find((i) => i._id === item);

        return (
          <AddSingeSocialWebSite
            id={item}
            getValue={handleSingleHistory}
            key={item}
            initialValue={initialSingleData}
          />
        );
      })}
      <button
        onClick={() => setAddMore((prev) => prev + 1)}
        className=" px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4">
        <FaPlus />
        <span> Add one more Link</span>
      </button>
    </div>
  );
};

export default React.memo(AddSocialWebSite);
