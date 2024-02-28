import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TypeOfSingleEducationHistory } from "../../../types/resumeEditor";
import AddSingleEducationHistory from "./AddSingleEducationHistory";
import compareArrays from "../../../utils/compareArrays";
import { nanoid } from "@reduxjs/toolkit";

interface IAddEducationHistory {
  getValue?: (data: TypeOfSingleEducationHistory[]) => void;
  initialValue?: TypeOfSingleEducationHistory[];
  getFocusedInputValue?: (data: string) => void;
  initialFocusedValue?: string;
}

const AddEducationHistory: React.FC<IAddEducationHistory> = ({
  getValue = () => {},
  initialValue,
  getFocusedInputValue = () => {},
  initialFocusedValue,
}) => {
  const [educationHistory, setEducationHistory] = useState<
    TypeOfSingleEducationHistory[]
  >(initialValue || []);

  const handleSingleHistory = (data: TypeOfSingleEducationHistory) => {
    const updatedHistory = educationHistory.map((item) => {
      if (item._id === data._id) {
        return {
          ...item,
          school: data.school,
          city: data.city,
          description: data.description,
          startMontYear: data.startMontYear,
          endMontYear: data.endMontYear,
          degree: data.degree,
        };
      }
      return item;
    });

    const isAlreadyExist = updatedHistory.find((item) => item._id === data._id);

    if (!isAlreadyExist) {
      setEducationHistory([...updatedHistory, data]);
    } else {
      setEducationHistory(updatedHistory);
    }
  };

  useEffect(() => {
    if (
      typeof getValue === "function" &&
      !compareArrays(educationHistory, initialValue || [])
    ) {
      getValue(educationHistory);
    }
  }, [educationHistory]);

  const handleDelete = (id: string | number) => {
    const filteredData = educationHistory.filter((item) => item._id !== id);
    setEducationHistory(filteredData);
  };
  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {educationHistory.map((item) => {
        const initialSingleData = educationHistory?.find(
          (i) => i._id === item._id
        );
        return (
          <AddSingleEducationHistory
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
          setEducationHistory((prev) => [
            ...prev,
            {
              _id: nanoid(),
              school: "",
              degree: "",
              startMontYear: "",
              endMontYear: "",
              city: "",
              description: "",
            },
          ]);
        }}
        className=" px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4">
        <FaPlus />
        <span> Add one more education</span>
      </button>
    </div>
  );
};

export default React.memo(AddEducationHistory);
