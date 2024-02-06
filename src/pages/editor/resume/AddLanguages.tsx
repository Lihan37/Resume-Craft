import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfLanguage } from "../../../types/resumeEditor";
import AddSingleLanguage from "./AddSingleLanguage";

interface IAddLanguages {
  getValue?: (data: TypeOfLanguage[]) => void;
  initialValue?: TypeOfLanguage[];
}

const AddLanguages: React.FC<IAddLanguages> = ({
  getValue = () => {},
  initialValue,
}) => {
  const [addMore, setAddMore] = useState<number>(
    initialValue && initialValue?.length > 0 ? initialValue?.length : 1
  );
  const [languages, setLanguages] = useState<TypeOfLanguage[]>(
    initialValue || []
  );

  const handleSingleHistory = (data: TypeOfLanguage) => {
    const updateHistory = languages?.map((item) => {
      if (item._id === data._id) {
        return {
          ...item,
          language: data.language,
          level: data.level,
        };
      }
      return item;
    });
    const isAlreadyExist = updateHistory.find((item) => item._id === data._id);

    if (!isAlreadyExist) {
      setLanguages([...updateHistory, data]);
    } else {
      setLanguages(updateHistory);
    }
  };

  useEffect(() => {
    if (typeof getValue === "function") {
      getValue(languages);
    }
  }, [languages]);

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item) => {
        const initialSingleData = languages?.find((i) => i._id === item);
        return (
          <AddSingleLanguage
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
        <span> Add one more Language</span>
      </button>
    </div>
  );
};

export default React.memo(AddLanguages);
