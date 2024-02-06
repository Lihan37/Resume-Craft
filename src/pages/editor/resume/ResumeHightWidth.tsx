import React, { useEffect, useState } from "react";
import { RxHeight, RxWidth } from "react-icons/rx";

interface IValue {
  height: string;
  width: string;
}

interface IResumeHightWidth {
  isSelectedValue: IValue;
  getValue?: (data: IValue) => void;
}

const ResumeHightWidth: React.FC<IResumeHightWidth> = ({
  isSelectedValue,
  getValue = () => {},
}) => {
  const [state, setState] = useState<IValue>(isSelectedValue);

  useEffect(() => {
    getValue(state);
  }, [state]);

  return (
    <div className=" text-lg rounded-md font-semibold border-[1.8px] flex justify-between items-center">
      <div className="w-full px-4 flex justify-between items-center  pr-3 border-r-[1.8px]">
        <div className=" flex justify-start items-center">
          <RxHeight className=" text-2xl" />
          <input
            onChange={(e) =>
              setState((prev) => ({ ...prev, height: e.target.value + "px" }))
            }
            value={state.height}
            className="w-20 outline-none "
            type="text"
          />
        </div>
        {/* <span className="  text-neutral-400">px</span> */}
      </div>
      <div className="p-2  px-4 w-full flex justify-between items-center pr-3">
        <div className=" flex justify-start items-center">
          <RxWidth className=" text-2xl" />
          <input
            onChange={(e) =>
              setState((prev) => ({ ...prev, width: e.target.value + "px" }))
            }
            className="w-20 outline-none "
            value={state.width}
            type="text"
          />
        </div>
        {/* <span className="  text-neutral-400">px</span> */}
      </div>
    </div>
  );
};

export default ResumeHightWidth;
