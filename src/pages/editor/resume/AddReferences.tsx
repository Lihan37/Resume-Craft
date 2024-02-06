import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfReference } from "../../../types";
import AddSingleReference from "./AddSingleReference";

interface IAddReferences {
  getValue?: (data: TypeOfReference[]) => void;
}

const AddReferences: React.FC<IAddReferences> = ({ getValue = () => {} }) => {
  const [addMore, setAddMore] = useState<number>(1);
  const [references, setReferences] = useState<TypeOfReference[]>([]);

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
        item.name = data.name;
        item.company = data.company;
        item.phone = data.phone;
        item.email = data.email;
      }
      return item;
    });
    setReferences(updateHistory);
  };

  useEffect(() => {
    getValue(references);
  }, [references]);

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item) => (
        <AddSingleReference
          id={`language-single-item-${item}`}
          getValue={handleSingleHistory}
          key={item}
        />
      ))}
      <button
        onClick={() => setAddMore((prev) => prev + 1)}
        className=" px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4">
        <FaPlus />
        <span> Add one more references</span>
      </button>
    </div>
  );
};

export default React.memo(AddReferences);
