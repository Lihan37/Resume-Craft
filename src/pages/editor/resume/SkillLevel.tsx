import React, { useEffect, useState } from "react";

const level = [
  {
    level: 20,
    label: "Novice",
    bg: "bg-red-100",
    span: "bg-red-300",
    text: "text-red-500",
    spanHover: "hover:bg-red-200",
  },
  {
    level: 40,
    label: "Beginner",
    bg: "bg-orange-100",
    span: "bg-orange-300",
    text: "text-orange-500",
    spanHover: "hover:bg-orange-200",
  },
  {
    level: 60,
    label: "Skillful",
    bg: "bg-lime-100",
    span: "bg-lime-300",
    text: "text-lime-500",
    spanHover: "hover:bg-lime-200",
  },
  {
    level: 80,
    label: "Experienced",
    bg: "bg-green-100",
    span: "bg-green-300",
    text: "text-green-500",
    spanHover: "hover:bg-green-200",
  },
  {
    level: 100,
    label: "Expert",
    bg: "bg-teal-100",
    span: "bg-teal-300",
    text: "text-teal-500",
    spanHover: "hover:bg-teal-200",
  },
];

interface ISkillLevel {
  getValue?: (data: number) => void;
  value?: number;
  disable?: boolean;
}

const SkillLevel: React.FC<ISkillLevel> = ({
  value,
  getValue = () => {},
  disable = false,
}) => {
  const [state, setState] = useState<number>(20);
  const selected = level.find((item) => item.level === state);

  useEffect(() => {
    if (value && value > 0) {
      setState(value);
    }
  }, []);

  useEffect(() => {
    if (state && state > 0) {
      getValue(state);
    }
  }, [state]);

  const handleLevel = (level: number) => {
    if (disable) {
      return;
    }
    setState(level);
  };
  return (
    <div className=" space-y-2">
      <h1 className=" text-c-dark-light font-semibold">
        Level:{" "}
        <span className={` ${!disable ? selected?.text : "text-gray-300"}`}>
          {" "}
          {selected?.label}
        </span>
      </h1>
      <div
        className={`flex cursor-not-allowed  justify-start items-center w-full ${
          !disable ? selected?.bg : "bg-gray-300"
        }`}>
        {level.map((item) => {
          const isActive = item.level === state;
          return (
            <Level
              onClick={() => handleLevel(item.level)}
              key={item.level}
              isActive={isActive}
              disable={disable}
              bg={!disable ? selected?.span : "bg-gray-500"}
              hoverColor={(!disable && selected?.spanHover) || ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillLevel;

interface ILevel {
  onClick?: () => void;
  isActive?: boolean;
  disable?: boolean;
  bg?: string;
  hoverColor?: string;
}

const Level: React.FC<ILevel> = ({
  onClick,
  isActive,
  bg,
  hoverColor,
  disable,
}) => {
  return (
    <span
      onClick={onClick}
      className={`${!isActive && hoverColor} ${
        !disable ? "cursor-pointer" : " cursor-not-allowed"
      } text-gray-400 py-1 w-full duration-300 transition-colors rounded-md  relative flex justify-end items-end ${
        isActive && bg
      }`}>
      |
    </span>
  );
};
