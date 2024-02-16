import React, { useEffect, useState } from "react";
import AddSingleEmploymentHistory from "./AddSingleEmploymentHistory";
import { FaPlus } from "react-icons/fa6";
import { TypeOfSingleEmploymentHistory } from "../../../types/resumeEditor";
import compareArrays from "../../../utils/compareArrays";
import { nanoid } from "@reduxjs/toolkit";

interface IAddEmploymentHistory {
  getValue?: (data: TypeOfSingleEmploymentHistory[]) => void;
  initialValue?: TypeOfSingleEmploymentHistory[];
  getFocusedInputValue?: (data: string) => void;
  initialFocusedValue?: string;
}

const AddEmploymentHistory: React.FC<IAddEmploymentHistory> = ({
  getValue = () => {},
  getFocusedInputValue = () => {},
  initialValue,
  initialFocusedValue,
}) => {
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
    if (
      typeof getValue === "function" &&
      !compareArrays(employmentHistory, initialValue || [])
    ) {
      getValue(employmentHistory);
    }
  }, [employmentHistory]);

  const handleDelete = (id: string | number) => {
    const filteredData = employmentHistory.filter((item) => item._id !== id);
    setEmploymentHistory(filteredData);
  };

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {employmentHistory.map((item: TypeOfSingleEmploymentHistory) => {
        const initialSingleData = employmentHistory?.find(
          (i) => i._id === item._id
        );
        return (
          <AddSingleEmploymentHistory
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
          setEmploymentHistory((prv) => [
            ...prv,
            {
              _id: nanoid(),
              jobTitle: "",
              employer: "",
              startMontYear: "",
              endMontYear: "",
              city: "",
              description: "",
            },
          ]);
        }}
        className="pb-5 px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4 ">
        <FaPlus />
        <span> Add one more employment</span>
      </button>
    </div>
  );
};

export default React.memo(AddEmploymentHistory);
