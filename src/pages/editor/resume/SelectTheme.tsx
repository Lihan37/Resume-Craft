import React from "react";
import ColorSelect from "../../../components/common/ColorSelect";
import createArrayUpToNumber from "../../../utils/createArrayUpToNumber";

interface ISelectTheme {
  selectedValue?: string;
  values?: string[];
  getValue?: (data: string) => void;
}

const SelectTheme: React.FC<ISelectTheme> = ({
  selectedValue,
  values,
  getValue = () => {},
}) => {
  return (
    <div className=" border-b pb-5">
      <div className="w-full gap-2 flex justify-start items-center">
        {values?.map((item, i) => {
          const isSelect = item === selectedValue;
          return (
            <ColorSelect
              key={i}
              onClick={() => getValue(item)}
              color={item}
              isSelect={isSelect}
            />
          );
        })}
        {createArrayUpToNumber(values ? 5 - values?.length : 5).map((item) => (
          <ColorSelect key={item} color="#383838" lock={true} />
        ))}

        {/* <ColorSelect color="#00f5e0" /> */}
      </div>
    </div>
  );
};

export default SelectTheme;
