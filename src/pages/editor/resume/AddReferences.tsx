import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TypeOfReference } from "../../../types/resumeEditor";
import AddSingleReference from "./AddSingleReference";
import compareArrays from "../../../utils/compareArrays";
import { nanoid } from "@reduxjs/toolkit";

interface IAddReferences {
  getValue?: (data: TypeOfReference[]) => void;
  initialValue?: TypeOfReference[];
  getFocusedInputValue?: (data: string) => void;
  initialFocusedValue?: string;
}

const AddReferences: React.FC<IAddReferences> = ({
  getValue = () => {},
  getFocusedInputValue = () => {},
  initialValue,
  initialFocusedValue,
}) => {
  const [references, setReferences] = useState<TypeOfReference[]>(
    initialValue || []
  );

  const handleSingleHistory = (data: TypeOfReference) => {
    // add new history
    const isAlreadyExist = references?.find((item) => item._id === data._id);

    if (!isAlreadyExist) {
      const filterData = references.filter((item) => item._id !== data._id);
      return setReferences([...filterData, data]);
    }

    // edit old history
    const updateHistory = references?.map((item) => {
      if (item._id === data._id) {
        return {
          ...item,
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email,
        };
      }
      return item;
    });
    setReferences(updateHistory);
  };

  useEffect(() => {
    if (
      typeof getValue === "function" &&
      !compareArrays(references, initialValue || [])
    ) {
      getValue(references);
    }
  }, [references]);

  const handleDelete = (id: string | number) => {
    const filteredData = references.filter((item) => item._id !== id);
    setReferences(filteredData);
  };

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {references.map((item) => {
        const initialSingleData = references?.find((i) => i._id === item._id);

        return (
          <AddSingleReference
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
          setReferences((prev) => [
            ...prev,
            {
              _id: nanoid(),
              name: "",
              company: "",
              phone: "",
              email: "",
            },
          ]);
        }}
        className=" px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4">
        <FaPlus />
        <span> Add one more references</span>
      </button>
    </div>
  );
};

export default React.memo(AddReferences);
