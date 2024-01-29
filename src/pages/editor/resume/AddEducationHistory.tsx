import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfSingleEducationHistory } from "../../../types";
import AddSingleEducationHistory from "./AddSingleEducationHistory";

interface IAddEducationHistory {
  getValue?: (data: TypeOfSingleEducationHistory[]) => void;
}

const AddEducationHistory: React.FC<IAddEducationHistory> = ({
  getValue = () => {},
}) => {
  const [addMore, setAddMore] = useState<number>(1);
  const [educationHistory, setEducationHistory] = useState<
    TypeOfSingleEducationHistory[]
  >([]);

  const handleSingleHistory = (data: TypeOfSingleEducationHistory) => {
    // add new history
    const isAlreadyExist = educationHistory?.find(
      (item) => item._id === data._id
    );

    if (!isAlreadyExist) {
      const filterData = educationHistory.filter(
        (item) => item._id !== data._id
      );
      return setEducationHistory([...filterData, data]);
    }

    // edit old history
    const updateHistory = educationHistory?.map((item) => {
      if (item._id === data._id) {
        item.school = data.school;
        item.city = data.city;
        item.description = data.description;
        item.startMontYear = data.startMontYear;
        item.endMontYear = data.endMontYear;
        item.degree = data.degree;
      }
      return item;
    });
    setEducationHistory(updateHistory);
  };

  useEffect(() => {
    getValue(educationHistory);
  }, [educationHistory]);

  // console.log("employmentHistory 2", employmentHistory);
  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item) => (
        <AddSingleEducationHistory
          id={item}
          getValue={handleSingleHistory}
          key={item}
        />
      ))}
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
