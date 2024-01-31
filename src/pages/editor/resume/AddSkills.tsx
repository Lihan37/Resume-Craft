import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";
import { TypeOfSkill } from "../../../types";
import AddSingleSkill from "./AddSingleSkill";

interface IAddSkills {
  getValue?: (data: TypeOfSkill[]) => void;
}

const AddSkills: React.FC<IAddSkills> = ({ getValue = () => {} }) => {
  const [addMore, setAddMore] = useState<number>(1);
  const [skills, setSkills] = useState<TypeOfSkill[]>([]);

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
        item.label = data.label;
        item.level = data.level;
      }
      return item;
    });
    setSkills(updateHistory);
  };

  useEffect(() => {
    getValue(skills);
  }, [skills]);

  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {createArrayUpToNumber(addMore).map((item) => (
        <AddSingleSkill
          id={`skill-single-item-${item}`}
          getValue={handleSingleHistory}
          key={item}
        />
      ))}
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
