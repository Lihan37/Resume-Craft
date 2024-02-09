import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfSkill } from "../../../types/resumeEditor";
import AddSingleSkill from "./AddSingleSkill";
import compareArrays from "../../../utils/compareArrays";

interface IAddSkills {
  getValue?: (data: TypeOfSkill[]) => void;
  initialValue?: TypeOfSkill[];
  getFocusedInputValue?: (data: string) => void;
  initialFocusedValue?: string;
}

const AddSkills: React.FC<IAddSkills> = ({
  getValue = () => {},
  getFocusedInputValue = () => {},
  initialValue,
  initialFocusedValue,
}) => {
  const [addMore, setAddMore] = useState<number>(
    initialValue && initialValue?.length > 0 ? initialValue?.length : 1
  );
  const [skills, setSkills] = useState<TypeOfSkill[]>(initialValue || []);

  const handleSingleHistory = (data: TypeOfSkill) => {
    // add new history
    const isAlreadyExist = skills?.find((item) => item._id === data._id);

    if (!isAlreadyExist) {
      const filterData = skills.filter((item) => item._id !== data._id);
      return setSkills([...filterData, data]);
    }

    // edit old history
    const updateHistory = skills?.map((item) => {
      if (item._id === data._id) {
        return {
          ...item,
          label: data.label,
          level: data.level,
        };
      }
      return item;
    });
    setSkills(updateHistory);
  };

  useEffect(() => {
    if (
      typeof getValue === "function" &&
      skills.length > 0 &&
      !compareArrays(skills, initialValue || [])
    ) {
      getValue(skills);
    }
  }, [skills]);

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item) => {
        const initialSingleData = skills?.find((i) => i._id === item);

        return (
          <AddSingleSkill
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
        <span> Add one more Skill</span>
      </button>
    </div>
  );
};

export default React.memo(AddSkills);
