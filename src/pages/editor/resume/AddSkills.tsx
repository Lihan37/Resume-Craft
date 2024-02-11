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
  skillLevel?: boolean;
  skillLevelDisabled?: boolean;
  handleSkillLevel?: () => void;
}

const AddSkills: React.FC<IAddSkills> = ({
  getValue = () => {},
  getFocusedInputValue = () => {},
  handleSkillLevel = () => {},
  initialValue,
  initialFocusedValue,
  skillLevel = false,
  skillLevelDisabled = false,
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
    <>
      <div className="px-5">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onChange={handleSkillLevel}
            type="checkbox"
            checked={skillLevel}
            disabled={skillLevelDisabled}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Level Hide
          </span>
        </label>
      </div>
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
              skillLevel={skillLevel}
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
    </>
  );
};

export default React.memo(AddSkills);
