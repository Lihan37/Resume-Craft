import React, { useRef, useState } from "react";
import InputText from "../common/InputText";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useOutsideClick from "../../hooks/useOutsideClick";
import { BiLoaderAlt } from "react-icons/bi";

const options = [
  { value: "m", label: "Minute" },
  { value: "h", label: "Hour" },
  { value: "d", label: "Day" },
];
interface IShare {
  templateId: string | number;
  type: string;
}

const Share: React.FC<IShare> = ({ templateId, type }) => {
  const [timeIsOpen, setTimeIsOpen] = useState<boolean>(false);
  const [validation, setValidation] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [timeFormat, setTimeFormat] = useState<string>("m");
  const [token, setToken] = useState<string | null>(null);
  const [time, setTime] = useState<number>(10);
  const dropRef = useRef(null);
  useOutsideClick(
    dropRef,
    () => {
      setTimeIsOpen(false);
    },
    []
  );

  const expiresIn =
    timeFormat === "m"
      ? time + "m"
      : timeFormat === "h"
      ? time + "h"
      : timeFormat === "d" && time + "d";

  const createToken = async () => {
    try {
      const data = validation
        ? { templateId, type, expiresIn }
        : { templateId, type };

      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_API}/user/v1/create/share`,
        {
          method: "POST",
          credentials: "include",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const token = await response.json();
      if (token) {
        setLoading(false);
        setToken(
          `${import.meta.env.VITE_BASE_URL_API_FRONTEND}/share/view/${token}`
        );
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const onTitleOptions = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <div className=" max-w-64 min-w-64 text-c-dark text-start">
      <div className="px-4 pt-2 pb-4">
        <div className="flex justify-start items-center gap-2">
          <h1 className=" text-lg font-semibold my-2">Validation</h1>
          <label
            htmlFor="Validation"
            className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="Validation"
                type="checkbox"
                className="hidden toggle__dotInput"
                checked={validation}
                onChange={(e) => setValidation(e.target.checked)}
              />
              <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
              <div className="toggle__dot bg-blue-400 absolute w-6 h-6  rounded-full shadow inset-y-0 left-0"></div>
            </div>
          </label>
        </div>
        {validation && (
          <div className="w-full flex justify-start items-center gap-3 ">
            <InputText
              type="number"
              value={time || 0}
              onChange={(e) => setTime(parseInt(e.target.value))}
            />
            <div
              ref={dropRef}
              onClick={() => setTimeIsOpen((prev) => !prev)}
              className=" relative gap-2 border-[1.3px] p-2 text-lg cursor-pointer  rounded-md flex justify-start items-center">
              <span>{options.find((i) => i.value === timeFormat)?.label}</span>
              {!timeIsOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
              {timeIsOpen && (
                <div className=" absolute top-11 w-full left-0 bg-white z-50 border-[1.3px]  ">
                  {options.map((i) => {
                    const isActive = i.value === timeFormat;
                    return (
                      <h1
                        onClick={(e) => {
                          setTimeFormat(i.value);
                          onTitleOptions(e);
                        }}
                        key={i.value}
                        className={`p-1 ${
                          isActive && "text-c-primary"
                        } text-sm hover:text-c-primary px-3 border-b-[1px]`}>
                        {i.label}
                      </h1>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
        <button
          disabled={loading}
          onClick={createToken}
          className="px-2 py-1 flex justify-start items-center gap-2 hover:bg-c-primary-light duration-300 bg-c-primary text-white rounded-md my-2">
          Create Link
          {loading && <BiLoaderAlt className="animate-spin text-xl" />}
        </button>
        {token && <InputText readOnly value={token} />}
      </div>
    </div>
  );
};

export default React.memo(Share);
