import React, { useEffect, useState } from "react";
import AddSingleEmploymentHistory from "./AddSingleEmploymentHistory";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfSingleEmploymentHistory } from "../../../types";

interface IAddEmploymentHistory {
  getValue?: (data: TypeOfSingleEmploymentHistory[]) => void;
}

const AddEmploymentHistory: React.FC<IAddEmploymentHistory> = ({
  getValue = () => {},
}) => {
  const [addMore, setAddMore] = useState<number>(1);
  const [employmentHistory, setEmploymentHistory] = useState<
    TypeOfSingleEmploymentHistory[]
  >([]);

  const handleSingleHistory = (data: TypeOfSingleEmploymentHistory) => {
    // add new history
    const isAlreadyExist = employmentHistory?.find(
      (item) => item._id === data._id
    );
    console.log("data 2 ", data);
    console.log("isAlreadyExist 3", isAlreadyExist);

    if (!isAlreadyExist) {
      const filterData = employmentHistory.filter(
        (item) => item._id !== data._id
      );
      return setEmploymentHistory([...filterData, data]);
    }

    // edit old history
    const updateHistory = employmentHistory?.map((item) => {
      if (item._id === data._id) {
        item.jobTitle = data.jobTitle;
        item.city = data.city;
        item.description = data.description;
        item.startMontYear = data.startMontYear;
        item.endMontYear = data.endMontYear;
        item.employer = data.employer;
      }
      return item;
    });
    setEmploymentHistory(updateHistory);
  };

  useEffect(() => {
    getValue(employmentHistory);
  }, [employmentHistory]);

  // console.log("employmentHistory 2", employmentHistory);
  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item) => (
        <AddSingleEmploymentHistory
          id={item}
          getValue={handleSingleHistory}
          key={item}
        />
      ))}
      <button
        onClick={() => setAddMore((prev) => prev + 1)}
        className=" px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4">
        <FaPlus />
        <span> Add one more employment</span>
      </button>
    </div>
  );
};

export default React.memo(AddEmploymentHistory);
