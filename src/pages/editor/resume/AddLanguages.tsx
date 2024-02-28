import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TypeOfLanguage } from "../../../types/resumeEditor";
import AddSingleLanguage from "./AddSingleLanguage";
import compareArrays from "../../../utils/compareArrays";
import { nanoid } from "@reduxjs/toolkit";

interface IAddLanguages {
  getValue?: (data: TypeOfLanguage[]) => void;
  initialValue?: TypeOfLanguage[];
  getFocusedInputValue?: (data: string) => void;
  initialFocusedValue?: string;
}

const AddLanguages: React.FC<IAddLanguages> = ({
  getValue = () => {},
  initialValue,
  getFocusedInputValue = () => {},
  initialFocusedValue,
}) => {
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
    if (
      typeof getValue === "function" &&
      !compareArrays(languages, initialValue || [])
    ) {
      getValue(languages);
    }
  }, [languages]);

  const handleDelete = (id: string | number) => {
    const filteredData = languages.filter((item) => item._id !== id);
    setLanguages(filteredData);
  };

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {languages.map((item) => {
        const initialSingleData = languages?.find((i) => i._id === item._id);
        return (
          <AddSingleLanguage
            id={item._id}
            getValue={handleSingleHistory}
            key={item._id}
            initialValue={initialSingleData}
            getFocusedInputValue={getFocusedInputValue}
            initialFocusedValue={initialFocusedValue}
            getDelete={handleDelete}
          />
        );
      })}
      <button
        onClick={() => {
          setLanguages((prev) => [
            ...prev,
            { _id: nanoid(), language: "", level: "" },
          ]);
        }}
        className=" px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4">
        <FaPlus />
        <span> Add one more Language</span>
      </button>
    </div>
  );
};

export default React.memo(AddLanguages);
