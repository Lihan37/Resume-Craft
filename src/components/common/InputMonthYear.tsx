import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useOutsideClick from "../../hooks/useOutsideClick";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface IInputMonthYear {
  getValue?: (data: string) => void;
  dropdownLef?: string;
  dropdownRight?: string;
}

const InputMonthYear: React.FC<IInputMonthYear> = ({
  getValue = () => {},
  dropdownLef = "0%",
  dropdownRight = "0%",
}) => {
  const [value, setValue] = useState<string>("");
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof getValue === "function" && value?.length > 0) {
      getValue(value);
    }
  }, [value]);

  const handleClickInput = () => {
    setIsOpen(true);
    setValue(`${months[month]},${year}`);
  };

  const handleMonth = (i: number) => {
    setMonth(i);
    setValue(`${months[i]},${year}`);
  };

  const yearPrev = (year: number) => {
    setYear(year - 1);
    setValue(`${months[month]},${year - 1}`);
  };
  const yearNext = (year: number) => {
    setYear(year + 1);
    setValue(`${months[month]},${year + 1}`);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={dropdownRef} className=" relative z-50">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClick={handleClickInput}
        type="text"
        placeholder="MM / YY"
        className="w-full px-4 py-2 rounded-md outline-none focus:border-c-primary  border-2 placeholder:font-semibold text-lg placeholder:text-gray-400 placeholder:text-base text-c-dark"
      />
      {isOpen && (
        <div
          style={{ left: dropdownLef, right: dropdownRight }}
          className=" p-4 top-14 w-64 z-50 bg-white absolute  rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex justify-between items-center border-b-2 pb-1 mb-2">
            <IoIosArrowBack
              onClick={() => yearPrev(year)}
              className=" hover:text-c-primary text-xl cursor-pointer"
            />
            <div className=" font-semibold text-xl"> {year} </div>
            <IoIosArrowForward
              onClick={() => yearNext(year)}
              className=" hover:text-c-primary text-xl cursor-pointer"
            />
          </div>
          <div className=" w-full h-full flex flex-wrap">
            {months.map((item, i) => {
              const isActive = i === month;
              return (
                <span
                  onClick={() => handleMonth(i)}
                  key={i}
                  className={`${
                    isActive
                      ? "bg-c-primary text-white"
                      : "hover:text-c-primary hover:bg-blue-100"
                  } h-fit px-2 py-1 rounded-xl cursor-pointer font-semibold  duration-300 transition-colors`}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(InputMonthYear);
