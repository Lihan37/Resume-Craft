import React, { useEffect, useState } from "react";
import AddSingleEmploymentHistory from "./AddSingleEmploymentHistory";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfSingleEmploymentHistory } from "../../../types/resumeEditor";

interface IAddEmploymentHistory {
  getValue?: (data: TypeOfSingleEmploymentHistory[]) => void;
  initialValue?: TypeOfSingleEmploymentHistory[];
}

const AddEmploymentHistory: React.FC<IAddEmploymentHistory> = ({
  getValue = () => {},
  initialValue,
}) => {
  const [addMore, setAddMore] = useState<number>(
    initialValue && initialValue?.length > 0 ? initialValue?.length : 1
  );
  const [employmentHistory, setEmploymentHistory] = useState<
    TypeOfSingleEmploymentHistory[]
  >(initialValue || []);

  const handleSingleHistory = (data: TypeOfSingleEmploymentHistory) => {
    const updatedHistory = employmentHistory.map((item) => {
      if (item._id === data._id) {
        return {
          ...item,
          jobTitle: data.jobTitle,
          city: data.city,
          description: data.description,
          startMontYear: data.startMontYear,
          endMontYear: data.endMontYear,
          employer: data.employer,
        };
      }
      return item;
    });
    const isAlreadyExist = updatedHistory.find((item) => item._id === data._id);

    if (!isAlreadyExist) {
      setEmploymentHistory([...updatedHistory, data]);
    } else {
      setEmploymentHistory(updatedHistory);
    }
  };

  useEffect(() => {
    if (typeof getValue === "function" && employmentHistory.length > 0) {
      getValue(employmentHistory);
    }
  }, [employmentHistory]);

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item: number) => {
        const initialSingleData = employmentHistory?.find(
          (i) => i._id === item
        );
        return (
          <AddSingleEmploymentHistory
            id={item}
            getValue={handleSingleHistory}
            key={item}
            initialValue={initialSingleData}
          />
        );
      })}
      <button
        onClick={() => setAddMore((prev) => prev + 1)}
        className="pb-5 px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4 ">
        <FaPlus />
        <span> Add one more employment</span>
      </button>
    </div>
  );
};

export default React.memo(AddEmploymentHistory);
