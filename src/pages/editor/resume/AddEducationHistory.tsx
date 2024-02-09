import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfSingleEducationHistory } from "../../../types/resumeEditor";
import AddSingleEducationHistory from "./AddSingleEducationHistory";
import compareArrays from "../../../utils/compareArrays";

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
  const [addMore, setAddMore] = useState<number>(
    initialValue && initialValue?.length > 0 ? initialValue?.length : 1
  );

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
      educationHistory.length > 0 &&
      !compareArrays(educationHistory, initialValue || [])
    ) {
      getValue(educationHistory);
    }
  }, [educationHistory]);

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item) => {
        const initialSingleData = educationHistory?.find((i) => i._id === item);
        return (
          <AddSingleEducationHistory
            id={item}
            getValue={handleSingleHistory}
            key={item}
            initialValue={initialSingleData}
            getFocusedInputValue={getFocusedInputValue}
            initialFocusedValue={initialFocusedValue}
          />
        );
      })}
      <button
        onClick={() => setAddMore((prev) => prev + 1)}
        className=" px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4">
        <FaPlus />
        <span> Add one more education</span>
      </button>
    </div>
  );
};

export default React.memo(AddEducationHistory);
