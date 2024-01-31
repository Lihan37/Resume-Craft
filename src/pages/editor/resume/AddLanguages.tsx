import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfLanguage } from "../../../types";
import AddSingleLanguage from "./AddSingleLanguage";

interface IAddLanguages {
  getValue?: (data: TypeOfLanguage[]) => void;
}

const AddLanguages: React.FC<IAddLanguages> = ({ getValue = () => {} }) => {
  const [addMore, setAddMore] = useState<number>(1);
  const [languages, setLanguages] = useState<TypeOfLanguage[]>([]);

  const handleSingleHistory = (data: TypeOfLanguage) => {
    // add new history
    const isAlreadyExist = languages?.find((item) => item._id === data._id);

    if (!isAlreadyExist) {
      const filterData = languages.filter((item) => item._id !== data._id);
      return setLanguages([...filterData, data]);
    }

    // edit old history
    const updateHistory = languages?.map((item) => {
      if (item._id === data._id) {
        item.language = data.language;
        item.level = data.level;
      }
      return item;
    });
    setLanguages(updateHistory);
  };

  useEffect(() => {
    getValue(languages);
  }, [languages]);

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item) => (
        <AddSingleLanguage
          id={`language-single-item-${item}`}
          getValue={handleSingleHistory}
          key={item}
        />
      ))}
      <button
        onClick={() => setAddMore((prev) => prev + 1)}
        className=" px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4">
        <FaPlus />
        <span> Add one more Language</span>
      </button>
    </div>
  );
};

export default React.memo(AddLanguages);
